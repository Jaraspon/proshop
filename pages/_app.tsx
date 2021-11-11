/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Head from 'next/head'
import Script from 'next/script'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/src/theme";
import "@/src/i18n/index";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="Welcome to Proshop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/Logo-web.png" />
        <script src="/assets/fontawesome/original/solid.js"></script>
        <script src="/assets/fontawesome/original/regular.js"></script>
        <script src="/assets/fontawesome/original/light.js"></script>
        <script src="/assets/fontawesome/original/brands.js"></script>
        <script src="/assets/fontawesome/original/duotone.js"></script>
        <script src="/assets/fontawesome/original/fontawesome.js"></script>
      </Head>
      {/* <Script src="https://kit.fontawesome.com/fb45de22ea.js" ></Script> */}
      {/* <Script src="/assets/fontawesome/original/all.js" ></Script> */}
      <ThemeProvider theme={theme}>
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>

  )
}
export default MyApp
