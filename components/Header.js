import { HStack, Link, Flex, Box, useColorModeValue, Container } from '@chakra-ui/react'
import NextLink from 'next/link'
import ColorModeSwitcher from './ColorModeSwitcher'
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
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={10}
    >
      <Container display='flex' p={2} align='center' wrap='wrap' justifyContent='space-between'>
        <Flex alignItems='center' justifyContent='space-around'>
          <Logo />
          <nav>
            <HStack display={{ base: 'none', md: 'flex' }}>
              <NextLink href='/about' path={path}>
                <Link>About</Link>
              </NextLink>
              <NextLink href='/works' path={path}>
                <Link>Works</Link>
              </NextLink>
            </HStack>
          </nav>
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
