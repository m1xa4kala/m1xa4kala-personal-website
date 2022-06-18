import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from '../header'

const Main = ({ children }) => {
  return (
    <Box as='main' pb={6}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Container pt={10}>{children}</Container>
    </Box>
  )
}

export default Main
