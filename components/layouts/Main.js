import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from '../Header.js'

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header path={router} />
      <Box as='main' pb={6}>
        <Container pt={14} maxW={['sm', 'container.sm', 'container.md', 'container.lg']}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
