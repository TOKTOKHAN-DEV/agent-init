import { DefaultSeo } from 'next-seo'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { TokGuideDrawer } from '@/components/@Drawer/TokGuideDrawer/TokGuideDrawer'
import ColorModeBtn from '@/components/ColorModeBtn'
import { OpenBtn } from '@/components/OpenBtn'
import { config as SEO } from '@/configs/seo/config'
import withAppProvider from '@/hocs/withAppProvider'

function App({ Component, pageProps }: any) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ColorModeBtn />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <OpenBtn
        target={<TokGuideDrawer />}
        button={<TokGuideDrawer.SideBtn />}
      />
    </>
  )
}

export default withAppProvider(App)
