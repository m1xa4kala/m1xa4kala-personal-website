import {
  Link,
  Flex,
  Box,
  HStack,
  useColorModeValue,
  Container,
  chakra,
  IconButton,
  Drawer,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  DrawerCloseButton,
  Icon,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'
import NextLink from 'next/link'
import ColorModeSwitcher from './ColorModeSwitcher'
import Logo from './Logo'

const Navbar = chakra('nav')

const Header = props => {
  const { path } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
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
              <NextLink href='/projects' path={path} passHref>
                <Link mb='-2' p='2'>
                  Projects
                </Link>
              </NextLink>
              <NextLink href='https://github.com/m1xa4kala/personal-website' path={path} passHref>
                <Link mb='-2' p='2' display='flex' alignItems='center' target='_blank'>
                  <Text mr={1}>Source</Text>
                  <Icon mt='-2' fontSize='2xl' as={AiFillGithub} />
                </Link>
              </NextLink>
              <Drawer
                size='sm'
                closeOnEsc
                closeOnOverlayClick
                returnFocusOnClose
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent p={4}>
                  <DrawerHeader display='flex' alignItems='center' justifyContent='space-between'>
                    <DrawerCloseButton />
                    <Logo size='xl' />
                  </DrawerHeader>
                  <DrawerBody>
                    <VStack spacing={6} alignItems='start'>
                      <NextLink href='/projects' path={path} passHref>
                        <Link fontSize='xl'>Projects</Link>
                      </NextLink>
                      <NextLink
                        href='https://github.com/m1xa4kala/personal-website'
                        path={path}
                        passHref
                      >
                        <Link fontSize='xl' display='flex' alignItems='center' target='_blank'>
                          <Text mr={1}>Source</Text>
                          <Icon mt='-2' fontSize='4xl' as={AiFillGithub} />
                        </Link>
                      </NextLink>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Navbar>
          </HStack>
          <HStack>
            <ColorModeSwitcher />
            <IconButton
              onClick={onOpen}
              display={{ base: 'inline-block', md: 'none' }}
              icon={<HamburgerIcon />}
              aria-label='menu'
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
