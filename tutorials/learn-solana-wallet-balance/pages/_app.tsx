import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutWrapper, Navbar } from '@dont-panic/ui'

const TutorialWrapper = ({ Component, pageProps }: AppProps) => {
  return (
      <main className='grid grid-cols-2 gap-2'>
        <div className='bg-gray-200'>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur soluta iure rem quas distinctio earum nihil sequi. Dolorum laboriosam pariatur eligendi optio a consectetur quia veniam voluptatem excepturi vitae?
          </p>
        </div>
    <div className='bg-gray-400'>
        <Component {...pageProps} />
    </div>
      </main>
  )
}


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

