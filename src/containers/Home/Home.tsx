import { Center, Text } from '@chakra-ui/react'

function Home() {
  return (
    <Center h={'100%'} borderRadius={'8px'} flexDir={'column'} gap={'20px'}>
      <Text
        color={'primary.3'}
        textStyle={'pre-heading-01'}
        textAlign={'center'}
      >
        TOKTOKHAN.DEV
      </Text>
      <Text color={'content.1'} textStyle={'pre-heading-02'}>
        Next page template
      </Text>
    </Center>
  )
}
export default Home
