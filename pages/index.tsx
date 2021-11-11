import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import Layout from '@/components/layout/manage';
import AuthComponent from '@/components/auth/Auth';
import LoadingOneComponent from '@/components/LoadingOne';
import dynamic from 'next/dynamic'

// const Layout = dynamic(() => import('@/components/layout/index'))
// const AuthComponent = dynamic(() => import('@/components/auth/Auth'))

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
    setTimeout(() => {
      setLoadingnOne(false)
    }, 2700);
  }, [])
  return (
    <>
      <LoadingOneComponent loading={loadingOne} />
      {(!loadingOne) &&
        <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={false}>
          <AuthComponent />
        </Layout>
      }

    </>
  )
}


export async function getServerSideProps(context: { req: { headers: { cookie: any; }; }; }) {
  let data = {
    token: null,
    isAuth: false,
    user: { id: 1, username: 'jesdakorn' }
  }
  if (context.req.headers.cookie) {
    // await getMiddleware(context.req.headers.cookie).then((res) => {
    //   auth = res
    // })
  }
  return {
    props: { auth: data }
  }
}


export default Home
