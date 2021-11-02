import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Head from 'next/head'
import Script from 'next/script'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/src/theme";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Proshop</title>
        <meta name="description" content="Welcome to Proshop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script src="/assets/fontawesome/original/all.js" ></Script>
        <ThemeProvider theme={theme}>
          <Provider store={store} >
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
    </>

  )
}
export default MyApp
