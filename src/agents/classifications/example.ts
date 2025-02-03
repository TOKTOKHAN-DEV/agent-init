import { ChatPromptTemplate } from '@langchain/core/prompts'

import { z } from 'zod'

import { model } from '@/agents/helper'

import { PARSE_RESPONSE_PROMPT } from './templates'

const MISSING_FIELDS = 'name, hair_color, height_in_meters'
const personSchema = z.object({
  name: z.optional(z.string()).describe('The name of the person'),
  hair_color: z
    .optional(z.string())
    .describe("The color of the person's hair if known"),
  height_in_meters: z
    .optional(z.string())
    .describe('Height measured in meters'),
})

export const getPerson = async (userMessage: string) => {
  const structured_llm = model.withStructuredOutput(personSchema)
  const parsePrompt = ChatPromptTemplate.fromTemplate(PARSE_RESPONSE_PROMPT)
  const prompt = await parsePrompt.invoke({
    userMessage: userMessage,
    missingFields: MISSING_FIELDS,
  })
  return await structured_llm.invoke(prompt)
}
