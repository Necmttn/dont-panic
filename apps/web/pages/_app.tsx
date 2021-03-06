import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutWrapper, Navbar } from '@dont-panic/ui'


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* TODO: <Analytics /> */}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      </>
  )
}
