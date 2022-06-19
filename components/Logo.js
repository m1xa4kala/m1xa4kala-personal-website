import NextLink from 'next/link'
import { Heading } from '@chakra-ui/react'

const Logo = () => {
  return (
    <NextLink href='/'>
      <a>
        <Heading size='md' fontWeight={500}>
          Mikhail Khaybullin
        </Heading>
      </a>
    </NextLink>
  )
}

export default Logo
