import { HStack, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './Logo'

const Header = props => {
  const { path } = props
  return (
    <header>
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
    </header>
  )
}

export default Header
