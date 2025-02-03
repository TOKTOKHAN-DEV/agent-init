import { useState } from 'react'

import {
  Button,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { useTimer } from '@toktokhan-dev/react-universal'

import VerificationInput from '@/components/@TextField/VerificationInput'

const CASES = ['VerificationInput'] as const

type Keys = (typeof CASES)[number]

const VerificationInputField = () => {
  const { time, start, pause, reset, restart, isEnd } = useTimer({
    autoStart: false,
    timeLimit: 1000 * 10,
    onTimeOver: () => console.log('Time Over'),
    onTimeUpdate: (time) => console.log('Time Update', time),
  })

  return (
    <VStack w="300px" spacing="20px" my="24px">
      <HStack w={'100%'}>
        <Button onClick={start}>start</Button>
        <Button onClick={pause}>pause</Button>
        <Button onClick={reset}>reset</Button>
        <Button onClick={restart}>restart</Button>
      </HStack>
      <VerificationInput {...{ time, isEnd }} />
    </VStack>
  )
}

const TextFieldCaseExample = () => {
  const [value, setValue] = useState<Keys>('VerificationInput')

  return (
    <>
      <RadioGroup onChange={(v: Keys) => setValue(v)} value={value}>
        <Stack direction="row">
          {CASES.map((label, index) => (
            <Radio key={index} value={label}>
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <VStack w="300px" spacing="20px" my="24px">
        {value === 'VerificationInput' && <VerificationInputField />}
      </VStack>
    </>
  )
}

export default TextFieldCaseExample
