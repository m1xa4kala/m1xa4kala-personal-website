import React from 'react'
import Layout from '../components/layouts/Main'

const MyApp = ({ router, Component, pageProps }) => {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
