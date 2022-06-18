import Link from 'next/link'
import { HStack, Heading, Icon } from '@chakra-ui/react'
import { IoLogoJavascript } from 'react-icons/io'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <HStack>
          <Icon as={IoLogoJavascript} />
          <Heading>Mikhail Khaybullin</Heading>
        </HStack>
      </a>
    </Link>
  )
}

export default Logo
