import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main'
import { useRouter } from 'next/router'
import theme from '../lib/theme'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
