import { StringOutputParser } from '@langchain/core/output_parsers'
import {
  RunnablePassthrough,
  RunnableSequence,
} from '@langchain/core/runnables'
import { ChatOpenAI } from '@langchain/openai'

import { getKnowledgeContext, prompt } from './knowleges'

export const model = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY!,
})

export const getChain = async () => {
  const context = await getKnowledgeContext()
  return RunnableSequence.from([
    {
      context,
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ])
}
