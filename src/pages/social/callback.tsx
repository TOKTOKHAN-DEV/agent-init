import { useEffect, useState } from 'react'

import LinkCallback from '@/containers/Social/components/LinkCallback'
import PopupCallback from '@/containers/Social/components/PopupCallback'

function SocialCallback() {
  const [isPopup, setIsPopup] = useState(true)
  useEffect(() => {
    if (!window.opener) {
      setIsPopup(false)
    }
  }, [isPopup])

  return isPopup ? <PopupCallback /> : <LinkCallback />
}

export default SocialCallback
