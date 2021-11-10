import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

var local = require('local-storage');

const axios = require('axios');
import Layout from '@/components/layout/index';
import Link from '@/components/Link'
import LoginComponent from '@/components/Login'


import { createStyles, makeStyles } from '@mui/styles';
import {
    Container,
    FormControl,
    Grid,
    OutlinedInput,
    Button,
    Theme,
    Stack,
    Card,
    CardContent,
    TextField,
    Alert,
    Snackbar,
    AlertTitle,
    Slide,
    SlideProps,
    InputLabel,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        
        },
    }),
);

const auth = (props: any) => {
    const classes = useStyles();

    return (
        <Layout user={{}} isAuth={false} showLayout={false}>

            <Container fixed className={classes.root}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{ minHeight: '100vh' }}
                >
                    <Box component="div" sx={{ maxWidth: 420 }}>
                        <LoginComponent />
                    </Box>
                </Stack>
            </Container>


        </Layout >
    )
}

auth.propTypes = {

}

export default auth
