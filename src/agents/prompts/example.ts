import {
  //   JsonOutputParser,
  StringOutputParser,
} from '@langchain/core/output_parsers'
import { ChatPromptTemplate } from '@langchain/core/prompts'

import { getChain } from '@/agents/helper'

import { COLLECT_INFO_PROMPT } from './templates'

export const getQuestion = async () => {
  const chain = await getChain()
  const collectPrompt = ChatPromptTemplate.fromTemplate(COLLECT_INFO_PROMPT)
  return collectPrompt.pipe(chain).pipe(new StringOutputParser()).invoke({})
}
