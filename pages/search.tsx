import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from "react-i18next";
import { useRouter } from 'next/router';
import { getMiddleware } from '@/src/utils/middleware'

import { styled } from '@mui/system';

import Layout from '@/src/templates/DefaultLayout';
import Logo from '@/components/subcomponent/LogoHome'
import BoxProducts from '@/components/component/BoxProducts'
import BoxProductTypes from '@/components/component/BoxProductTypes'
import ButtonLanguage from '@/components/subcomponent/ButtonLanguage'
import { Box, FormControlLabel, Grid, Grow, Paper, Switch } from '@mui/material';

import { loadProducts, loadProductsNot } from '@/store/actions'

const StyledTitle = styled('section')(({ theme }) => ({
    backgroundColor: ' #FFFFFF',
    boxShadow: `2px 0px 20px 0px ${theme.palette.primary.main}2b`,
    margin: '30px auto',
    flexDirection: 'column',
    alignItems: 'start',
    padding: ' 10px 20px',
    position: 'relative',
    backgroundImage: `url(${"bg.png"})`,
    backgroundSize: '1000px',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ['@media (max-width: 666px)']: {
        width: '100%',
    },
    '& .heading h3': {

        textAlign: 'start',
        fontSize: '1.5rem',
        margin: 0,

    },
    '& .heading h3 b': {
        color: `${theme.palette.primary.main}`,
        fontWeight: 700,
        letterSpacing: '2px',
        marginRight: '10px'
    },
}));
const StyledBoxProduct = styled('section')(({ theme }) => ({
    width: ' 85%',

    margin: '30px auto',
    flexDirection: 'column',
    alignItems: 'start',
    padding: ' 10px 20px',
    position: 'relative',
    backgroundImage: `url(${"bg.png"})`,
    backgroundSize: '1000px',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ['@media (max-width: 666px)']: {
        width: '100%',
    },
}));


interface propTypes {
    auth: {
        user: object,
        isAuth: boolean
    }
}


const Search = ({ auth }: propTypes) => {
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const { keyword, page = 1, sortBy, order = '', category = '' } = router.query;

    const [keySearch, setKeySearch] = useState('')
    useEffect(() => {
        console.log(`keyword`, typeof keyword)
        // console.log('router.query :>> ', router.query);
        // (async () => {
        dispatch(loadProducts());
        if (keyword) {
            setKeySearch(`${keyword}`)
        } else {
            setKeySearch(`${category}`)
        }

        // })();
    }, [])
    useEffect(() => {

        if (keyword) {
            setKeySearch(`${keyword}`)
        } else {
            setKeySearch(`${category}`)
        }
        if (category == "กระเป๋า") {

            dispatch(loadProductsNot());
        }else{
            dispatch(loadProducts());
        }
        // })();
    }, [keyword, category, page, sortBy, order])



    useEffect(() => {

        console.log('teeee', counter.products);

    }, [counter.products])

    return (
        <>
            <Layout user={auth?.user} isAuth={auth?.isAuth} showLayout={true}>
                <Logo title={'Ma|in|Shop|ping'} image={'/undraw_online_shopping_ga73.svg'} button={'เริ่มช้อปปิ้ง'} />
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={11} lg={10}>
                        <StyledTitle>
                            <div className="heading">
                                <h3><b>{t("text_search")}:</b>{keySearch}</h3>
                            </div>
                        </StyledTitle>
                    </Grid>
                </Grid>


                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={3} lg={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <BoxProductTypes title={'ประเภท'} />
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <BoxProducts title={'สิน|ค้า'} items={counter.products} />
                    </Grid>
                </Grid>


            </Layout>
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

export default Search
