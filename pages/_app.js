import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main'
import { useRouter } from 'next/router'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </ChakraProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
