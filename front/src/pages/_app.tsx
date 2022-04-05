import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/Navbar'
import ShopProvider from '../providers/ShopProvider'
import Global from '../styles/global'
import theme from '../styles/themes'
import { CartProvider } from 'react-use-cart'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <CartProvider>
        <ShopProvider>
          <ThemeProvider theme={theme}>
            <Global/>
            <Head>
              <title>Cart Shipping</title>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
          </ThemeProvider>
        </ShopProvider>
      </CartProvider>
    </>
  )
}

export default MyApp
