import NextLink from 'next/link'
import { Heading } from '@chakra-ui/react'

const Logo = ({ size = 'md' }) => {
  return (
    <NextLink href='/'>
      <a>
        <Heading size={size} fontWeight={500}>
          Mikhail Khaybullin
        </Heading>
      </a>
    </NextLink>
  )
}

export default Logo
