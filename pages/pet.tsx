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

import Layout from '@/components/layout/index';
import AuthComponent from '@/components/auth/Auth';
import ContentPetComponent from '@/components/ContentPet';
// import LoadingOneComponent from '@/components/LoadingOne';
import dynamic from 'next/dynamic'

// const Layout = dynamic(() => import('@/components/layout/index'))
// const AuthComponent = dynamic(() => import('@/components/auth/Auth'))
const LoadingOneComponent = dynamic(() => import('@/components/LoadingOne'))

import { getMiddleware } from '@/src/middleware'


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

  const [user, setUser] = useState([])
  const [loadingOne, setLoadingnOne] = useState(true)

 
  useEffect(() => {

    console.log('auth', auth);
  }, [auth])
  return (
    <>
      {/* <LoadingOneComponent loading={loadingOne} /> */}
      {/* {(!loadingOne) && */}
        <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
          {/* <ContentPetComponent /> */}
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


export default Home
