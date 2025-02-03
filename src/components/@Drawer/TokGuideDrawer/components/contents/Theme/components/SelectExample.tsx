import { useState } from 'react'

import { Radio, RadioGroup, Stack, VStack } from '@chakra-ui/react'

import CommonSelect, { ExtractReadOnlyMap } from '@/components/CommonSelect'
import FormHelper from '@/components/FormHelper'

const VARIANTS = ['outline', 'solid'] as const
type Keys = (typeof VARIANTS)[number]

type Options = ExtractReadOnlyMap<typeof FRUITS>

export const FRUITS = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',

    value: 'banana',
  },
  {
    label: 'Cherry',

    value: 'cherry',
  },
] as const

const SelectExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [variant, setVariant] = useState<Keys>('outline')
  const [value, setValue] = useState<Options | null>(null)

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
        <FormHelper label="Fruits">
          <CommonSelect
            variant={variant}
            placeholder="select fruits"
            onChange={setValue}
            value={value}
            options={FRUITS.map((item) => {
              return { label: item.label, value: item.value }
            })}
          />
        </FormHelper>
      </VStack>
    </>
  )
}

export default SelectExample
