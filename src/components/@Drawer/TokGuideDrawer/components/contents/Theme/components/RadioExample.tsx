import React from 'react'

import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const RadioExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [value, setValue] = React.useState('1')

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        {['First', 'Second', 'Third', 'Fourth'].map((label, index) => (
          <Radio
            isDisabled={isDisable}
            key={index}
            value={(index + 1).toString()}
          >
            {label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}

export default RadioExample
