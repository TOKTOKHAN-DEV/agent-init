import type { NextApiRequest, NextApiResponse } from 'next'

import Agent from '@/agents'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const authHeader = req.headers['authorization']

  if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(403).json({ error: 'Forbidden: Unauthorized' })
  }
  const { userMessage } = req.body
  const agent = new Agent()
  const assistantMessage = await agent.sendMessage(userMessage)

  console.log('assistantMessage', assistantMessage)
  const result = {
    userMessage: userMessage,
    assistantMessage: assistantMessage,
  }
  res.status(200).json(result)
}
