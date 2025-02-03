import { useState } from 'react'

import {
  FormLabelProps,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import FormHelper from '@/components/FormHelper'

const VARIANTS = ['outline', 'solid'] as const
type Keys = (typeof VARIANTS)[number]
const TextAreaExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [variant, setVariant] = useState<Keys>('outline')

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
        >
          <Textarea variant={variant} placeholder="텍스트를 입력해주세요" />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
        >
          <Textarea value="값" variant={variant} onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ error: '설명' }}
          isInvalid
          isDisabled={isDisable}
        >
          <Textarea autoFocus variant={variant} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ success: '설명' }}
          isDisabled={isDisable}
        >
          <Textarea value="값" variant={variant} onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
        >
          <Textarea variant={variant} value="값" onChange={() => {}} />
        </FormHelper>
        <FormHelper
          label="주제"
          message={{ help: '설명' }}
          isDisabled={isDisable}
        >
          <Textarea
            variant={variant}
            placeholder="텍스트를 입력해주세요"
            isDisabled
          />
        </FormHelper>
      </VStack>
    </>
  )
}

export default TextAreaExample
