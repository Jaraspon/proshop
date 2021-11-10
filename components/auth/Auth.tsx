import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

var local = require('local-storage');

const axios = require('axios');
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
    }),
);

const Auth = (props: any) => {
    const classes = useStyles();
    const [routerPath, setRouterPath] = useState(true)
    const [checked, setChecked] = useState(false)

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
                            <LoginComponent clickLink={clickLink} loadingFade={checked} loadingFadeTime={500} />
                        ) : (
                            <RegisterComponent clickLink={clickLink} loadingFade={checked} loadingFadeTime={500} />
                        )}

                    </Box>
                </Stack>
            </Container>
        </Layout >
    )
}

Auth.propTypes = {

}

export default Auth
