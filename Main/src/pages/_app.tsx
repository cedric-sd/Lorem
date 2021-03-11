import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'
import 'bootstrap/dist/css/bootstrap.min.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lorem</title>

        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta name="description" content="Default created by cedric" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
