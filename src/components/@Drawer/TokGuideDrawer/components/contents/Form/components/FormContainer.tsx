import { ReactNode } from 'react'

import { Button, StackProps, VStack } from '@chakra-ui/react'

interface FormContainerProps extends Omit<StackProps, 'content'> {
  content: ReactNode
  onConfirm: () => void
  isDisable: boolean
}
export const FormContainer = ({
  content,
  onConfirm,
  isDisable,
  ...basisProps
}: FormContainerProps) => {
  return (
    <VStack as={'form'} onSubmit={onConfirm} {...basisProps}>
      <Button alignSelf={'end'} onClick={onConfirm}>
        제출
      </Button>
      {content}
    </VStack>
  )
}
