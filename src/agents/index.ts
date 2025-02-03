import { getPerson } from './classifications'
import { getTagging } from './extractions'
import { getQuestion } from './prompts'

class Agent {
  constructor() {
    // this.tweet = tweet
  }

  async sendMessage(userMessage: string): Promise<string> {
    // 분류 작업을 통해서 태깅 데이터를 얻는다.
    const tagging = await getTagging(userMessage)
    if (tagging) {
      // 태깅 데이터가 있으면 질문 생성한다.
      return getQuestion()
    } else {
      // 태깅 데이터가 없으면 분류 작업을 통해서 유저 데이터를 얻는다.
      const person = await getPerson(userMessage)
      return person.name ?? ''
    }
  }
}

export default Agent
