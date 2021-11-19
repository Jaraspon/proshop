import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var local = require('local-storage');
import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
const axios = require('axios');

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { i18n } from 'next-i18next'

import Layout from '@/components/layout/DefaultLayout';
import AuthComponent from '@/components/auth/AuthComponent';
import ContentMainComponent from '@/components/ContentMain';
// import LoadingOneComponent from '@/components/LoadingOne';
import dynamic from 'next/dynamic'

// const Layout = dynamic(() => import('@/components/layout/index'))
// const AuthComponent = dynamic(() => import('@/components/auth/Auth'))
const LoadingOneComponent = dynamic(() => import('@/components/LoadingOne'))

import { getMiddleware } from '@/src/middleware'
import useSessionStorage from 'react-use-sessionstorage';

interface NewsFeedItemProps {
  auth: {
    user: object,
    isAuth: boolean
  }
}

const Home: NextPage<NewsFeedItemProps> = ({ auth }) => {
  const counter = useSelector((state: any) => state.reducer)
  const dispatch = useDispatch()
  const router = useRouter();
  // const [item, setItem] = useSessionStorage('l_o', '0');
  const [user, setUser] = useState([])
  const [loadingOne, setLoadingnOne] = useState(true)

  const [onePa, setOnePa] = useState(true)
  useEffect(() => {
    (async () => {
      await setOnePa(false)

      if (sessionStorage.getItem('l_o') == "1") {
        setLoadingnOne(false)
      } else {
        setTimeout(() => {
          setLoadingnOne(false)

        }, 2700);
        await sessionStorage.setItem('l_o', "1");
      }

    })();

  }, [loadingOne])



  if (onePa) {
    return <></>
  }
  return (
    <>
      <LoadingOneComponent loading={loadingOne} />
      {(!loadingOne) &&
        <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
          {/* Homeccb */}
          {/* <div>555</div> */}
          {/* <ContentMainComponent /> */}
          {/* <AuthComponent /> */}
        </Layout>
      }

    </>
  )
}


export async function getServerSideProps(context: any) {
  let data = {
    token: null,
    isAuth: false,
    user: {}
  }

  // let data
  if (context.req.headers.cookie) {
    await getMiddleware(context.req.headers.cookie).then((res) => {
      data = res
    })
  }
  return {
    props: { auth: data}
  }
}



export default Home


