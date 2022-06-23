import Document, { NextScript, Head, Html, Main } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

class Website extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Website
