import { useState } from 'react'

import {
  Box,
  Button,
  Code,
  Flex,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ItemOf } from '@toktokhan-dev/universal'

import { ICON_SPACING_BY_SIZE } from '@/configs/theme/components/single/button/sizes'
import { PlusIcon } from '@/generated/icons/MyIcons'

const BUTTON_SIZES = ['lg', 'md', 'sm'] as const

const BUTTON_VARIANTS = [
  'solid-primary',
  'outline-primary',
  'outline-secondary',
  'outline-tertiary',
  'text-primary',
  'text-secondary',
]

const BUTTON_ICON_POSITIONS = ['none', 'left', 'right', 'both'] as const
type IconPosition = ItemOf<typeof BUTTON_ICON_POSITIONS>

const ButtonExample = ({ isDisable = false }: { isDisable: boolean }) => {
  const [position, setPosition] = useState<IconPosition>('none')

  const isRenderIcon = (pos: IconPosition) => {
    return position === pos || position === 'both'
  }

  return (
    <Box>
      <RadioGroup onChange={(v) => setPosition(v as any)} value={position}>
        <Code fontWeight="bold" mb="8px">
          Icon Position
        </Code>
        <Flex mb="20px" gridColumnGap="12px">
          {BUTTON_ICON_POSITIONS.map((pos, index) => (
            <Radio key={index} value={pos}>
              {pos}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>

      <Flex gridColumnGap="12px" w={'100%'}>
        {BUTTON_SIZES.map((size, index) => (
          <VStack key={index} spacing="8px" w={'100%'}>
            <Text textStyle={'pre-caption-02'}>size {size}</Text>

            <VStack flex={1} justifyContent="space-between">
              {BUTTON_VARIANTS.map((variant, index) => (
                <Button
                  iconSpacing={ICON_SPACING_BY_SIZE[size]}
                  isDisabled={isDisable}
                  size={size}
                  variant={variant}
                  key={index}
                  leftIcon={isRenderIcon('left') ? <PlusIcon /> : undefined}
                  rightIcon={isRenderIcon('right') ? <PlusIcon /> : undefined}
                >
                  {variant}
                </Button>
              ))}
            </VStack>
          </VStack>
        ))}
      </Flex>
    </Box>
  )
}

export default ButtonExample
