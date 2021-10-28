import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { ReactElement, useEffect } from 'react';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import Layout from '@/components/layout/manage';


const Home: NextPage = () => {
  const counter = useSelector((state: any) => state.reducer)
  const dispatch = useDispatch()
  const router = useRouter();

  console.log(counter);

  return (
    <>
      <Layout user="dsdddd">
        
        asfasf

      </Layout>

    </>
  )
}

export default Home
