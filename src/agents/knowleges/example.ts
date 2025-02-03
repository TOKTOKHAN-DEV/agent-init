import type { Document } from '@langchain/core/documents'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { OpenAIEmbeddings } from '@langchain/openai'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'

import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import * as fs from 'node:fs'

const formatDocumentsAsString = (documents: Document[]) => {
  return documents.map((document) => document.pageContent).join('\n\n')
}

export const getKnowledgeContext = async () => {
  const text = fs.readFileSync(
    process.cwd() + '/src/agents/knowleges/knowlege.txt',
    'utf8',
  )
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  const docs = await textSplitter.createDocuments([text])
  const formattedDocs = docs.map((doc) => ({
    pageContent: doc.pageContent.toString(), // 문자열로 변환
    metadata: doc.metadata || {},
  }))

  const vectorStore = await MemoryVectorStore.fromDocuments(
    formattedDocs,
    new OpenAIEmbeddings(),
  )
  const vectorStoreRetriever = vectorStore.asRetriever()
  return async (query: unknown) => {
    const docs = await vectorStoreRetriever.getRelevantDocuments(String(query))
    return formatDocumentsAsString(docs)
  }
}

const SYSTEM_TEMPLATE = `다음의 맥락을 사용하여 마지막의 질문에 답변하세요.
답을 모르는 경우, 답변을 만들어내려 하지 말고 모른다고 말씀해 주세요.
----------------
{context}`

export const prompt = ChatPromptTemplate.fromMessages([
  ['system', SYSTEM_TEMPLATE],
  ['human', '{question}'],
])
