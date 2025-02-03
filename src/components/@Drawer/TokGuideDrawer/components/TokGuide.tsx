import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { Bookmarks } from './contents/Bookmarks'
import Components from './contents/Components/Components'
import { Examples } from './contents/Examples'
import Form from './contents/Form/Form'
import State from './contents/State/State'
import Theme from './contents/Theme/Theme'

export const TokGuide = () => {
  return (
    <Box>
      <Text textStyle="pre-heading-01">Tok Guide</Text>

      <Text mt="24px">
        환영합니다. 해당 보일러템플릿은 똑똑한개발자에서 제공하는 여러 모듈로
        이루어져 있습니다.
      </Text>
      <Tabs mt="24px" overflowX={'auto'}>
        <TabList>
          <Tab>Bookmarks</Tab>
          <Tab>State</Tab>
          <Tab>Form</Tab>
          <Tab>Theme</Tab>
          <Tab>Components</Tab>
          <Tab>Examples</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Bookmarks />
          </TabPanel>
          <TabPanel>
            <State />
          </TabPanel>
          <TabPanel>
            <Form />
          </TabPanel>
          <TabPanel>
            <Theme />
          </TabPanel>
          <TabPanel>
            <Components />
          </TabPanel>
          <TabPanel>
            <Examples />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
