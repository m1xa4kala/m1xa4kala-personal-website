import { HStack, Link, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './Logo'

const Header = props => {
  const { path } = props
  return (
    <Box
      as='header'
      position='fixed'
      p={2}
      bg={useColorModeValue('ffffff40', '20202380')}
      w='full'
      backdropFilter={'blur(10px)'}
      zIndex={10}
    >
      <Flex alignItems='center' justifyContent='space-around'>
        <Logo />
        <nav>
          <HStack>
            <NextLink href='/about' path={path}>
              <Link>About</Link>
            </NextLink>
          </HStack>
        </nav>
      </Flex>
    </Box>
  )
}

export default Header
