import React from 'react'

import { Button, HStack, Text, VStack } from '@chakra-ui/react'

import { useGlobalStore } from '@/stores/global/state'

import { Link } from '../../common/simple'
import Sections from './components/@Layout/Sections'
import Global from './components/Global'
import Storage from './components/Storage'
import Local from './components/local/Local'
import { CountProvider } from './components/local/storage/state'

const State = () => {
  return (
    <VStack w={'100%'} spacing={'20px'}>
      <Text>
        Zustand를 활용한 상태관리 예시입니다. 자세한 설명은{' '}
        <Link
          href={
            'https://toktokhan-dev-docs.vercel.app/docs/category/store-zustand-guide'
          }
        >
          공식문서
        </Link>
        를 참고해주세요.
      </Text>
      <Sections title={'Global State'}>
        <Global />
      </Sections>
      <Sections title={'Local State'}>
        <CountProvider>
          <Local />
        </CountProvider>
      </Sections>
      <Sections title={'Storage State'}>
        <Storage />
      </Sections>
    </VStack>
  )
}

export default State
