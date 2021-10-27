import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useEffect } from 'react';
import { Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';


const Home: NextPage = () => {
  const counter = useSelector((state: any) => state.reducer)
  const dispatch = useDispatch()
  const router = useRouter();

  console.log(counter);
  
  return (
    <>
      <div>aaaaa</div>

    </>
  )
}

export default Home
