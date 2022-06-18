import React from 'react'
import Document, { NextScript, Head, Html, Main } from 'next/document'

class Website extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Website
