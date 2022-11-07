import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}