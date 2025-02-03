import React from 'react'

import { Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'

import CommonAlert from '@/components/@Modal/CommonAlert'

const AlertExample = () => {
  const alertDisClosure = useDisclosure()

  return (
    <>
      <ButtonGroup w={'100%'}>
        <Button size={'sm'} onClick={alertDisClosure.onOpen}>
          OPEN BUTTON ALERT
        </Button>
      </ButtonGroup>
      <CommonAlert
        variant="alert"
        isOpen={alertDisClosure.isOpen}
        onClose={alertDisClosure.onClose}
        header="타이틀"
        body="디스크립션"
        buttons={[
          {
            label: 'Label',
            variant: 'outline-secondary',
            onClick: alertDisClosure.onClose,
          },
          { label: 'Label', onClick: alertDisClosure.onClose },
        ]}
      />
    </>
  )
}

export default AlertExample
