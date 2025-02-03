import { ComponentProps, ComponentType, useEffect } from 'react'

import { useRouter } from 'next/router'

import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'

export default function withAuthGuard<T extends ComponentType<any>>(
  AppComponent: T,
) {
  return function WrappedAppComponent(props: ComponentProps<T>) {
    const router = useRouter()
    const { isLogin } = useAuth()

    useEffect(() => {
      if (isLogin === false)
        router.replace(
          `${ROUTES.LOGIN}?returnUrl=${encodeURIComponent(router.asPath)}`,
        )
    }, [isLogin, router])

    return isLogin ? <AppComponent {...props} /> : <></>
  }
}
