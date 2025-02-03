import React from 'react'

import { Stack, Switch } from '@chakra-ui/react'

const SwitchExample = ({ isDisable = false }: { isDisable: boolean }) => {
  return (
    <Stack align="center" direction="row">
      <Switch isDisabled={isDisable} size="sm" />
      <Switch isDisabled={isDisable} size="md" />
    </Stack>
  )
}

export default SwitchExample
