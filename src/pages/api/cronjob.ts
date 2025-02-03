import type { NextApiRequest, NextApiResponse } from 'next'

import { Scraper, SearchMode } from 'agent-twitter-client'

import Agent from '@/agents'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const authHeader = req.headers['authorization']

  if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(403).json({ error: 'Forbidden: Unauthorized' })
  }

  const TWITTER_USERNAME = process.env.TWITTER_USERNAME!

  const scraper = new Scraper()
  const cookies = JSON.parse(process.env.TWITTER_COOKIES!)

  const cookieStrings = cookies.map(
    (cookie: any) =>
      `${cookie.key}=${cookie.value}; Domain=${cookie.domain}; Path=${
        cookie.path
      }; ${cookie.secure ? 'Secure' : ''}; ${
        cookie.httpOnly ? 'HttpOnly' : ''
      }; SameSite=${cookie.sameSite || 'Lax'}`,
  )
  await scraper.setCookies(cookieStrings)

  const results = await scraper.fetchSearchTweets(
    TWITTER_USERNAME,
    30,
    SearchMode.Latest,
  )

  const tweets = results.tweets.filter(
    (tweet) => tweet.username !== TWITTER_USERNAME,
  )

  console.log('Start Cron Job')
  const messages = []
  const agent = new Agent()
  for (const tweet of tweets.slice(0, 1)) {
    const userMessage = tweet.text?.replace(`@${TWITTER_USERNAME}`, '')

    const assistantMessage = await agent.sendMessage(userMessage!)

    const sendTweetResults = await sendSplitTweets(
      scraper,
      tweet.username!,
      assistantMessage!,
      tweet.id!,
    )
    if (sendTweetResults.status === 200) {
      // TODO: 유저와 봇의 메시지 데이터 저장 로직
      messages.push({
        tweet_id: tweet.id!,
        userMessage: userMessage!,
        assistantMessage: assistantMessage!,
      })
    }
  }

  const result = {
    messages,
  }
  res.status(200).json(result)
}

async function sendSplitTweets(
  scraper: Scraper,
  username: string,
  assistantMessage: string,
  replyToTweetId: string,
): Promise<{ status: number }> {
  const MAX_BYTES = 280
  const messages = []

  // Split into sentence units (based on periods, exclamation marks, question marks)
  const cleanedMessage = assistantMessage
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const sentences = cleanedMessage.match(/[^.!?]+[.!?]+/g) || [cleanedMessage]

  let currentTweet = ''
  let previousTweetId = replyToTweetId

  for (const sentence of sentences) {
    // Check if adding the next sentence exceeds 280 characters
    const nextTweet =
      currentTweet ?
        `@${username} ${currentTweet}${sentence}`
      : `@${username} ${sentence}`

    const nextTweetBytes = Buffer.byteLength(nextTweet, 'utf8')
    if (nextTweetBytes > MAX_BYTES) {
      if (currentTweet) {
        messages.push(`@${username} ${currentTweet.trim()}`)
      }
      currentTweet = sentence
    } else {
      currentTweet = currentTweet ? `${currentTweet}${sentence}` : sentence
    }
  }

  if (currentTweet) {
    messages.push(`@${username} ${currentTweet.trim()}`)
  }

  const length = messages.length
  for (let i = 0; i < length; i++) {
    try {
      const result = await scraper.sendTweet(messages[i], previousTweetId)
      const body = await result.json()

      const tweetResult = body.data.create_tweet.tweet_results.result
      previousTweetId = tweetResult.rest_id
      await new Promise((resolve) => setTimeout(resolve, 300))

      if (result.status !== 200) {
        return { status: result.status }
      }
    } catch (error) {
      console.error('Error sending tweet: ', error)
      return { status: 500 }
    }
  }

  return { status: 200 }
}
