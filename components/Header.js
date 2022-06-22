import {
  Link,
  Flex,
  Box,
  HStack,
  useColorModeValue,
  Container,
  chakra,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ColorModeSwitcher from './ColorModeSwitcher'
import Logo from './Logo'

const Navbar = chakra('nav')

const Header = props => {
  const { path } = props
  return (
    <Box
      as='header'
      position='fixed'
      py={1.5}
      bg={useColorModeValue('#ffffff40', '#222E3A')}
      boxShadow='sm'
      w='full'
      zIndex={10}
    >
      <Container maxW={['sm', 'container.sm', 'container.md', 'container.lg']}>
        <Flex alignItems='center' justifyContent='space-between'>
          <HStack>
            <Logo />
            <Navbar display={{ base: 'none', md: 'flex' }} alignItems='center' w='sm'>
              <NextLink href='/about' path={path}>
                <Link mb='-2' p='2'>
                  Projects
                </Link>
              </NextLink>
              <NextLink href='/works' path={path}>
                <Link mb='-2'>Source</Link>
              </NextLink>
            </Navbar>
          </HStack>
          <HStack>
            <ColorModeSwitcher />
            <IconButton display={{ base: 'inline-block', md: 'none' }} icon={<HamburgerIcon />} aria-label='menu' />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
