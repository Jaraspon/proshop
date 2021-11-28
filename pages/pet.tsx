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

import Layout from '@/src/templates/DefaultLayout';
// import AuthComponent from '@/components/auth/Auth';
import ContentMainComponent from '@/src/components/ContentMain';
// import LoadingOneComponent from '@/components/LoadingOne';
import dynamic from 'next/dynamic'

// const Layout = dynamic(() => import('@/components/layout/index'))
// const AuthComponent = dynamic(() => import('@/components/auth/Auth'))
const LoadingOneComponent = dynamic(() => import('@/src/components/subcomponent/LoadingOne'))

import { getMiddleware } from '@/src/utils/middleware'
import { useTranslation, Trans } from "react-i18next";

interface NewsFeedItemProps {
  auth: {
    user: object,
    isAuth: boolean
  }
}

const Pet: NextPage<NewsFeedItemProps> = ({ auth }) => {
  const counter = useSelector((state: any) => state.reducer)
  const dispatch = useDispatch()
  const router = useRouter();
  const { t, i18n } = useTranslation()
  const [user, setUser] = useState([])
  const [loadingOne, setLoadingnOne] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingnOne(false)
  //   }, 2700);

  // }, [])

  useEffect(() => {

    console.log('auth', auth);
  }, [auth])
  return (
    <>
      {/* <LoadingOneComponent loading={loadingOne} />
      {(!loadingOne) && */}
        <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
          {/* <ContentMainComponent /> */}
          {/* <AuthComponent /> */}
        </Layout>
      {/* } */}

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


export default Pet
