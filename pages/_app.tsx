/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Head from 'next/head'
import Script from 'next/script'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/src/theme";
import { createTheme } from "@mui/material/styles";
import "@/src/i18n/index";
import CssBaseline from '@mui/material/CssBaseline';
import { useSSR } from 'react-i18next';
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Welcome to Proshop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/Logo-web.png" />
      </Head>
      <Script src="/assets/js/index.js" ></Script>
      {/* <Script src="/assets/fontawesome/original/all.js" ></Script> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>

  )
}

export default appWithTranslation(MyApp)
