import { Flex, HStack, Text } from '@chakra-ui/react'
import Avatar from './Avatar'
import Info from './Info'

const About = () => {
  return (
    <Flex wrap='wrap' gap={10} justifyContent='center' alignItems='start'>
      <HStack minWidth='xs'>
        <Avatar />
        <Info />
      </HStack>
      <Text as='p' fontSize='xl' maxWidth={['full', 'full', 'xs', 'xl']}>
        Hello, I&apos;m Frontend developer from Russia!
        <br />
        For the past few years I have improving my skill in program engineering, exploring computer
        science and awesome frontend stuff.
      </Text>
    </Flex>
  )
}

export default About
