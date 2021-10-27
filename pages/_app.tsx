import '../styles/globals.css'
import type { AppProps } from 'next/app'
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "@/store/index";
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Proshop</title>
        <meta name="description" content="Welcome to Proshop" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </>
=======
>>>>>>> parent of b0de01e (add file)
=======
>>>>>>> parent of b0de01e (add file)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
