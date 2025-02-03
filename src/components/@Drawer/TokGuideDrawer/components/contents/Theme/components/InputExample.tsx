import { useState } from 'react'

import {
  FormLabelProps,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react'

import FormHelper from '@/components/FormHelper'

const VARIANTS = ['outline', 'solid', 'underlined'] as const
type Keys = (typeof VARIANTS)[number]
const InputExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [variant, setVariant] = useState<Keys>('outline')
  const formLabelProps: FormLabelProps = {
    variant: variant === 'underlined' ? variant : 'lined',
  }

  return (
    <>
      <RadioGroup onChange={(v: Keys) => setVariant(v)} value={variant}>
        <Stack direction="row">
          {VARIANTS.map((label, index) => (
            <Radio isDisabled={isDisable} key={index} value={label}>
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <VStack spacing="20px" my="24px">
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input variant={variant} placeholder="텍스트를 입력해주세요" />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input value="값" variant={variant} onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ error: '설명' }}
          isInvalid
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input autoFocus variant={variant} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ success: '설명' }}
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input value="값" variant={variant} onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input variant={variant} value="값" onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
          styles={{
            label: formLabelProps,
          }}
        >
          <Input
            variant={variant}
            placeholder="텍스트를 입력해주세요"
            isDisabled
          />
        </FormHelper>
      </VStack>
    </>
  )
}

export default InputExample
