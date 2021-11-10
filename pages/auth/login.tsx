import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

var local = require('local-storage');

const axios = require('axios');
import Layout from '@/components/layout/index';
import Link from '@/components/Link'
import LoginComponent from '@/components/auth/Login'
import LoadingButton from '@mui/lab/LoadingButton';
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
import { createStyles, makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // backgroundColor: `${theme.palette.primary.main}68`,
            // minHeight: 'calc(100vh) ',
            // minHeight: 'calc(100vh - 64px) ',
            // paddingTop: '10px',
            // paddingBottom: '30px',
            // justifyContent: 'center',
            ['@media (max-width: 599px) ']: {
                // minHeight: 'calc(100vh) ',
                // minHeight: 'calc(100vh - 56px) ',
            },
        },
    }),
);

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
}


const Login = () => {
    const classes = useStyles();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);
    const [errorInputStatus, setErrorInputStatus] = useState({ username: false, password: false })
    const [errorInputMess, setErrorInputMess] = useState({ username: '', password: '' })
    const [values, setValues] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    })
    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
        disabled: true
    })

    const [alert, setAlert] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        mess: ''
    });

    const { vertical, horizontal, open } = alert;


    const changeInput = (e: any) => {
        e.preventDefault();
        let key = e.target.name;
        let value = e.target.value;
        setDataForm({ ...dataForm, [key]: value })
    }

    const submitLogin = (e: any): void => {
        e.preventDefault();
        setLoading(true)
        axios.post('/api/auth/login', { username: dataForm.username, password: dataForm.password }).then(function (res: any) {
            const _res = res.data
            if (_res?.status?.success) {
                setAlert({ ...alert, open: false, mess: _res?.status?.message });
                local.set('pethouse_auth', _res.user.token);
            } else {
                console.log('w');

                setAlert({ ...alert, open: true, mess: _res?.status?.message });
            }
            setTransition(() => TransitionLeft);
            setLoading(false)

            // router.push(`/`)
        }).catch(function (error: any) {
            console.log(error.response.data.status.message);
            setAlert({ ...alert, open: true, mess: error.response.data.status.message });
            setLoading(false)
        });
    }
    useEffect(() => {
        if (dataForm.username != '' && dataForm.password != '' && dataForm.password.length >= 6) {
            setDataForm({ ...dataForm, disabled: false })
            return;
        }
        setDataForm({ ...dataForm, disabled: true })
    }, [dataForm.username, dataForm.password])


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword, });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
    };

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

export default Login

