import React from 'react'

import { Center, ChakraProps, Code, Text } from '@chakra-ui/react'

interface AuthProps extends ChakraProps {}

function Auth({ ...basisProps }: AuthProps) {
  return (
    <Center {...basisProps}>
      <Text>로그인 해야지만 접근할 수 있는 페이지 입니다.</Text>
      <Code>middleware</Code>에서 auth path를 등록하여 redirect 시켜주세요.
    </Center>
  )
}

export default Auth
