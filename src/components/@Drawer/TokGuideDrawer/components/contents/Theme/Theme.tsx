import { ComponentType, useState } from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Switch,
  Text,
} from '@chakra-ui/react'

import AlertExample from './components/AlertExample'
import ButtonExample from './components/ButtonExample'
import CheckboxExample from './components/CheckboxExample'
import InputExample from './components/InputExample'
import RadioExample from './components/RadioExample'
import SelectExample from './components/SelectExample'
import SwitchExample from './components/SwitchExample'
import TextAreaExample from './components/TextAreaExample'

const EXAMPLES = [
  {
    title: 'Button',
    component: ButtonExample,
  },
  {
    title: 'Input',
    component: InputExample,
  },
  {
    title: 'TextArea',
    component: TextAreaExample,
  },
  {
    title: 'Select',
    component: SelectExample,
  },
  {
    title: 'Radio',
    component: RadioExample,
  },
  {
    title: 'Checkbox',
    component: CheckboxExample,
  },
  {
    title: 'Switch',
    component: SwitchExample,
  },
  {
    title: 'Alert',
    component: AlertExample,
  },
]
const Theme = () => {
  const [isDisable, setIsDisable] = useState(false)

  const cloneWithDisabled = (
    Component: ComponentType<{ isDisable: boolean }>,
    index: number,
  ) => <Component key={index} isDisable={isDisable} />

  return (
    <Box>
      <HStack mb={'20px'} justify={'end'}>
        <Text textStyle={'pre-heading-05'}>Toggle Disable</Text>
        <Switch
          size={'sm'}
          isChecked={isDisable}
          onChange={(e) => setIsDisable(e.target.checked)}
        />
      </HStack>

      <Accordion allowMultiple>
        {EXAMPLES.map((data, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Text as="span" flex="1" textAlign="left">
                  {data.title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel overflowX={'scroll'}>
              {cloneWithDisabled(data.component, index)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default Theme
