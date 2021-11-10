import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

var local = require('local-storage');

const axios = require('axios');
import { useTranslation, Trans } from "react-i18next";

import Layout from '@/components/layout/index';
import LoginComponent from '@/components/auth/Login'
import RegisterComponent from '@/components/auth/Register'
import LoadingComponent from '@/components/Loading'


import { createStyles, makeStyles } from '@mui/styles';
import {
    Container,
    Theme,
    Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        language: {
            position: 'absolute',
            right: 0,
            top: 0,
            padding: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            '& .action': {
                fontSize: ' 1.2rem',
                fontWeight: 'bold',
                color: `${theme.palette.primary.main}`
            }
        }
    }),
);

const Auth = (props: any) => {
    const classes = useStyles();
    const [routerPath, setRouterPath] = useState(true)
    const [checked, setChecked] = useState(false)
    const { t, i18n } = useTranslation()
    const [lng, setLng] = useState('th')
    useEffect(() => {
        setTimeout(() => {
            setChecked(false)
        }, 500);
    }, [routerPath])

    const clickLink = async (res: any) => {
        await setChecked(true)
        setTimeout(() => {
            setRouterPath(res)
        }, 1000);
    }
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        setLng(lng)
    };

    useEffect(() => {
        setLng(local.get('i18nextLng'))
        // (ls.get('i18nextLng') == 'th' && setDataMenuItem(jsonDataTh.menu_main))
    }, [lng])


    return (
        <Layout user={{}} isAuth={false} showLayout={false}>
            <LoadingComponent loading={checked} />
            <Container fixed className={classes.root}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{ minHeight: '100vh' }}
                >
                    <Box component="div" sx={{ maxWidth: 420 }}>
                        {routerPath ? (
                            <LoginComponent clickLink={clickLink} loadingFade={checked} loadingFadeTime={300} />
                        ) : (
                            <RegisterComponent clickLink={clickLink} loadingFade={checked} loadingFadeTime={300} />
                        )}

                    </Box>
                </Stack>
            </Container>
            <div className={`${classes.language} select-none `}><span className={lng == 'th' ? "action" : ""} onClick={() => changeLanguage('th')}> TH </span><Box component="span" sx={{ px: 1 }}>| </Box> <span className={lng == 'en' ? "action" : ""} onClick={() => changeLanguage('en')}> EN</span></div>
        </Layout >
    )
}

Auth.propTypes = {

}



export default Auth
