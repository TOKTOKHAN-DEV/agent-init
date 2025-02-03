import { useRouter } from 'next/router'

import {
  Box,
  Code,
  HStack,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'
import {
  Apple,
  AppleButton,
  AppleIconButton,
  Facebook,
  FacebookButton,
  FacebookIconButton,
  GOOGLE_AUTH_SCOPE,
  Google,
  GoogleButton,
  GoogleIconButton,
  Kakao,
  KakaoButton,
  KakaoIconButton,
  Naver,
  NaverButton,
  NaverIconButton,
  useOauthPopupListener,
} from '@toktokhan-dev/react-web'

import Admonition from '@/components/@Templates/Admonition'
import TemplateLayout from '@/components/@Templates/TemplateLayout'
import { ENV } from '@/configs/env'

import { OauthCallback } from '../Social/types/oauth'

const kakao = new Kakao(ENV.KAKAO_CLIENT_ID)
const naver = new Naver(ENV.NAVER_CLIENT_ID)
const google = new Google(ENV.GOOGLE_CLIENT_ID)
const facebook = new Facebook(ENV.FACEBOOK_CLIENT_ID)
const apple = new Apple(ENV.APPLE_CLIENT_ID)

function Login() {
  const router = useRouter()
  const { returnUrl } = router.query
  const { colorMode } = useColorMode()

  useOauthPopupListener<OauthCallback>({
    onSuccess: (res) => {
      // if (!res?.code || !res.state) return // TODO: error handling
      // mutateAsync({
      //   data: {
      //     code: res.code,
      //     type: res.state.type,
      //   },
      // }).then((res) => useLocalStorage.setState({ token: res }))
    },
    onFail: () => {
      // console.log('fail')
    },
  })
  return (
    <TemplateLayout title={'Login'}>
      <Admonition title="로그인 페이지" type="info">
        <Box color={'content.1'} mb={'10px'} textStyle={'pre-body-03'}>
          로그인 한 유저 Block: <Code color="content.1">withUnAuthGard</Code>
          <UnorderedList fontSize="14px" px="20px">
            <ListItem>로그인 페이지</ListItem>
            <ListItem>회원가입 페이지</ListItem>
          </UnorderedList>
        </Box>
        <Box color={'content.1'} textStyle={'pre-body-03'}>
          로그인 안 한 유저 Block: <Code color="content.1">withAuthGard</Code>
          <UnorderedList fontSize="14px" px="20px">
            <ListItem>마이 페이지</ListItem>
            <ListItem>주문 페이지</ListItem>
          </UnorderedList>
        </Box>
      </Admonition>
      <HStack mt={'30px'} spacing={4} flexWrap={'wrap'}>
        <KakaoButton
          colorMode={colorMode}
          onClick={() =>
            kakao.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/',
                type: 'kakao',
              },
            })
          }
        />
        <NaverButton
          colorMode={colorMode}
          onClick={() =>
            naver.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/',
                type: 'naver',
              },
            })
          }
        />
        <GoogleButton
          colorMode={colorMode}
          onClick={() =>
            google.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              scope: [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile],
              state: {
                returnUrl: returnUrl || '/',
                type: 'google',
              },
            })
          }
        />
        <FacebookButton
          colorMode={colorMode}
          onClick={() =>
            facebook.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/',
                type: 'facebook',
              },
            })
          }
        />
        <AppleButton
          colorMode={colorMode}
          onClick={() =>
            apple.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/',
                type: 'apple',
              },
            })
          }
        />
      </HStack>
      <HStack mt={'20px'} flexWrap={'wrap'} justify={'center'} spacing={'20px'}>
        <KakaoIconButton
          colorMode={colorMode}
          onClick={() =>
            kakao.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'kakao',
              },
            })
          }
        />
        <NaverIconButton
          colorMode={colorMode}
          onClick={() =>
            naver.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'naver',
              },
            })
          }
        />
        <GoogleIconButton
          colorMode={colorMode}
          onClick={() =>
            google.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              scope: [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile],
              state: {
                returnUrl: returnUrl || '/login',
                type: 'google',
              },
            })
          }
        />
        <FacebookIconButton
          colorMode={colorMode}
          onClick={() =>
            facebook.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'facebook',
              },
            })
          }
        />
        <AppleIconButton
          colorMode={colorMode}
          onClick={() =>
            apple.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'apple',
              },
            })
          }
        />
      </HStack>
    </TemplateLayout>
  )
}

export default Login
