import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react'

import AlertExample from './components/AlertExample'
import TextFieldCaseExample from './components/TextFieldCaseExample'

const EXAMPLES = [
  {
    title: 'Input',
    component: <TextFieldCaseExample />,
  },
  {
    title: 'Alert',
    component: <AlertExample />,
  },
]

const Components = () => {
  return (
    <Box>
      <Accordion allowMultiple>
        {EXAMPLES.map(({ title, component }, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Text as="span" flex="1" textAlign="left">
                  {title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel overflowX={'scroll'}>{component}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default Components
