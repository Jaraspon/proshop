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
import { useTranslation, Trans } from "react-i18next";
import Layout from '@/src/templates/DefaultLayout';
import AuthComponent from '@/src/components/auth/AuthComponent';
import ContentMainComponent from '@/src/components/ContentMain';
// import LoadingOneComponent from '@/components/LoadingOne';
import dynamic from 'next/dynamic'

// const Layout = dynamic(() => import('@/components/layout/index'))
// const AuthComponent = dynamic(() => import('@/components/auth/Auth'))
import LoadingOneComponent from '@/src/components/subcomponent/LoadingOne'

import { getMiddleware } from '@/src/utils/middleware'
import useSessionStorage from 'react-use-sessionstorage';
import Logo from '@/components/subcomponent/LogoHome'
import BoxSlickProducType from '@/components/subcomponent/BoxSlickProducType'




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
  const { t, i18n } = useTranslation();
  // const [item, setItem] = useSessionStorage('l_o', '0');
  const [user, setUser] = useState([])
  const [loadingOne, setLoadingnOne] = useState(false)

  const [onePa, setOnePa] = useState(true)
  useEffect(() => {
    (async () => {
      await setOnePa(false)
      if (sessionStorage.getItem('l_o') == "1") {
        setLoadingnOne(false)

      } else {
        setLoadingnOne(true)
        setTimeout(() => {
          setLoadingnOne(false)
          sessionStorage.setItem('l_o', "1");
        }, 3500);


      }
     
    })();
    
    
    
  }, [])



  if (onePa) {
    return (
      <>
        {/* <LoadingOneComponent loading={loadingOne} /> */}
        {/* <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}></Layout> */}
      </>
    )
  }
  return (
    <>
      <LoadingOneComponent loading={loadingOne} />
      {(!loadingOne) &&
        <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
          <Logo title={'Ma|in|Shop|ping'} image={'/undraw_online_shopping_ga73.svg'} button={'เริ่มช้อปปิ้ง'} />
          <BoxSlickProducType title={t("product_type")} items={counter.categorys}/>


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
    props: { auth: data }
  }
}



export default Home


