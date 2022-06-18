import Link from 'next/link'
import { HStack, Heading, Icon } from '@chakra-ui/react'
import { IoLogoReact } from 'react-icons/io'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <HStack>
          <Icon as={IoLogoReact} />
          <Heading>Mikhail Khaybullin</Heading>
        </HStack>
      </a>
    </Link>
  )
}

export default Logo
