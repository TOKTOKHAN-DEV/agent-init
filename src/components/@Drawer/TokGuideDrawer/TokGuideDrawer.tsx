import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/react'

import { SideBtn } from './components/SideBtn'
import { TokGuide } from './components/TokGuide'

export const TokGuideDrawer = Object.assign(
  (props: Partial<DrawerProps>) => {
    return (
      <Drawer
        size="md"
        placement="right"
        isOpen={false}
        onClose={() => {}}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton w="40px" h="40px" />
          <DrawerBody>
            <TokGuide />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  },
  {
    SideBtn,
  },
)
