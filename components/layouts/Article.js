import Head from 'next/head'
import { motion } from 'framer-motion'
import { SimpleGrid } from '@chakra-ui/react'

const Layout = ({ children, title }) => {
  const t = 'm1xa4kala - ' + title
  return (
    <>
      <Head>
        <title>{t}</title>
      </Head>
      <motion.article
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.4, type: 'easeInOut' }}
      >
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        <SimpleGrid columns={['1', '1', '2']} py={4} gap={4}>
        {children}
        </SimpleGrid>
      </motion.article>
    </>
  )
}

export default Layout
