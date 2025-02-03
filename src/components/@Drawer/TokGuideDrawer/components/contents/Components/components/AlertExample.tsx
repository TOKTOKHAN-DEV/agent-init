import React from 'react'

import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'

import CommonAlert from '@/components/@Modal/CommonAlert'

const AlertExample = () => {
  const twoBtnAlert = useDisclosure()
  const singleBtnAlert = useDisclosure()

  return (
    <>
      <ButtonGroup w={'100%'}>
        <Button size={'sm'} onClick={singleBtnAlert.onOpen}>
          SINGLE BUTTON ALERT
        </Button>
        <Button size={'sm'} onClick={twoBtnAlert.onOpen}>
          DOUBLE BUTTON ALERT
        </Button>
      </ButtonGroup>
      <CommonAlert
        variant="alert"
        isOpen={singleBtnAlert.isOpen}
        onClose={singleBtnAlert.onClose}
        header="타이틀"
        body="디스크립션"
        buttons={[{ label: 'Label', onClick: singleBtnAlert.onClose }]}
      />
      <CommonAlert
        variant="alert"
        isOpen={twoBtnAlert.isOpen}
        onClose={twoBtnAlert.onClose}
        header="타이틀"
        body="디스크립션"
        buttons={[
          {
            label: 'Label',
            variant: 'outline-secondary',
            onClick: twoBtnAlert.onClose,
          },
          { label: 'Label', onClick: twoBtnAlert.onClose },
        ]}
      />
    </>
  )
}

export default AlertExample
