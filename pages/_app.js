import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main'
import theme from '../lib/theme'

const MyApp = ({ router, Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
