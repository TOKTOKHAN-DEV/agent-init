# LangChain AI Agent with ElizaOS

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![LangChain](https://img.shields.io/badge/LangChain-0.1.0-blue)](https://python.langchain.com/)
[![ElizaOS](https://img.shields.io/badge/ElizaOS-latest-green)](https://github.com/elizaOS)

랭체인과 ElizaOS를 활용해 AI Agent 구현하는 보일러플레이트 입니다.

</div>

## 📚 개요

이 프로젝트는 LangChain과 ElizaOS를 활용하여 지능형 AI Agent를 구현한 것입니다. 분류(Classification), 데이터 추출(Extraction), 파일 기반 검색 등 다양한 AI 기능을 제공합니다.

## 🚀 주요 기능

- 텍스트 분류 및 카테고리화
- 구조화된 데이터 추출
- 파일 기반 지식 검색
- 맞춤형 프롬프트 관리
- ElizaOS 기반 에이전트 실행

## 🔍 상세 기능

- 분류 시스템 (`/agent/classifications`)
  - 텍스트 입력을 기반으로 한 자동 분류
  - 커스터마이즈 가능한 분류 템플릿
- 데이터 추출 (`/agent/extractions`)
  - 비정형 데이터에서 구조화된 정보 추출
  - 템플릿 기반 추출 로직
- 지식 검색 (`/agent/knowleges`)
  - 파일 기반 정보 검색
  - 컨텍스트 인식 검색 기능
- 프롬프트 관리 (`/agent/prompts`)
  - 재사용 가능한 프롬프트 템플릿
  - 동적 프롬프트 생성

## 🛠 파일 구조

```plaintext
├── agent
│   ├── classifications       # 분류(Classification) 작업을 위한 로직과 템플릿
│   │   ├── templates.ts      # 분류 작업에 필요한 템플릿 정의
│   │   └── index.ts          # 분류 로직의 핵심 실행 파일
│   ├── extractions           # 구조화된 데이터 추출(Extraction) 로직을 실행하는 모듈
│   │   ├── templates.ts      # 데이터 추출을 위한 템플릿 정의
│   │   └── index.ts          # 추출 로직의 핵심 실행 파일
│   ├── knowleges             # 파일 기반 검색(File Search) 기능을 위한 인터페이스
│   │   ├── example.txt       # 샘플 파일 (파일 검색 테스트용)
│   │   └── index.ts          # 파일 검색 로직 구현
│   ├── prompts               # 대화 생성을 위한 프롬프트 관리
│   │   ├── templates.txt     # 프롬프트 템플릿 저장소
│   │   └── index.ts          # 프롬프트 관련 기능을 처리하는 파일
│   ├── helper.ts             # LLM 모델을 활용한 보조 기능 구현
│   └── index.ts              # 전체 Agent 구성을 관리하는 엔트리 파일
└── ...
```

## 💻 설치 방법

```bash
git clone https://github.com/TOKTOKHAN-DEV/agent-init
cd agent-init
pnpm install
```

## ⚙️ 환경 설정

`.env` 파일에 다음 환경 변수들을 설정하세요

```plaintext
SUPABASE_URL=
SUPABASE_ANON_KEY=

CRON_SECRET=
X_API_KEY=

OPENAI_API_KEY=sk-**

TWITTER_USERNAME=
TWITTER_COOKIES=[{"key":"auth_token","value":"","domain":".twitter.com"},{"key":"ct0","value":"","domain":".twitter.com"},{"key":"guest_id","value":"","domain":".twitter.com"}]
```
