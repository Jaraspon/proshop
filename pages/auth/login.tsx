import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

const axios = require('axios');
import Layout from '@/components/layout/index';
import Link from '@/components/Link'
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
            backgroundColor: `${theme.palette.primary.main}68`,
            minHeight: 'calc(100vh - 64px) ',
            paddingTop: '10px',
            justifyContent: 'center',
            ['@media (max-width: 599px) ']: {
                minHeight: 'calc(100vh - 56px) ',
            },
            '& .marked-register': {
                color: `${theme.palette.primary.main} !important`,
                fontWeight: 'bold',
                fontSize: '1.2rem'
            },
            '& .input-hover div': {
                '&:hover fieldset': {
                    borderColor: `${theme.palette.primary.main}`
                }
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


    const submitLogin = (e: any): void => {
        e.preventDefault();
        axios.post('/api/auth/login', { username: dataForm.username, password: dataForm.password }).then(function (res: any) {
            const _res = res.data
            console.log(_res);
            if (_res?.username?.message != '') {
                console.log('u');
                // setErrorInputStatus({ username: true, password: fa })
                // setErrorInputMess({ ...errorInputMess, username: _res?.username?.message })
            }
            if (_res?.password?.message != '') {
                console.log('p');
                // setErrorInputStatus({ password: true })
                // setErrorInputMess({ ...errorInputMess, password: _res?.username?.message })
            }
            if (_res?.username?.message != '' && _res?.password?.message != '') {
                console.log('u p');

            }

            if (_res?.status?.success) {
                setAlert({ ...alert, open: false, mess: _res?.status?.message });
                Cookies.set('auth', _res.user.token)

            } else {
                console.log('w');

                setAlert({ ...alert, open: true, mess: _res?.status?.message });
            }
            setTransition(() => TransitionLeft);
            console.log(alert);

            // router.push(`/`)
        }).catch(function (error: any) {
            console.log(error);
        });
    }
    useEffect(() => {

        if (dataForm.username != '' && dataForm.password != '' && dataForm.password.length >= 6) {
            setDataForm({ ...dataForm, disabled: false })
        } else {
            setDataForm({ ...dataForm, disabled: true })
        }
        console.log('dd', dataForm);
    }, [dataForm.username, dataForm.password])


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Layout user={{}} isAuth={false} >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                className={classes.root}

            >

                <Card variant="outlined" sx={{ borderRadius: 5, py: { xs: 3, sm: 3 }, px: { xs: 1, sm: 3 }, maxWidth: 500, m: { xs: 1 } }}>
                    <CardContent>
                        <form onSubmit={submitLogin} className="user-select">
                            <Stack
                                sx={{ mb: 3 }}
                                direction={{ xs: 'column', sm: 'row' }}
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                className="    user-select: none;"
                            >
                                <p>Do you have an account? &nbsp; </p><Link to="/auth/register" style="marked-register">Sign up for PROSHOP</Link>
                            </Stack>

                            <TextField
                                id="username"
                                className="input-hover"
                                sx={{ mb: 2 }}
                                type="text"
                                fullWidth
                                label="Username or Email"
                                onChange={e => setDataForm({ ...dataForm, ['username']: e.target.value })}
                            />
                            <FormControl fullWidth sx={{ mb: 2 }} className="input-hover">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput

                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={e => setDataForm({ ...dataForm, ['password']: e.target.value })}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                sx={{ mr: 0.1 }}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Button disabled={dataForm.disabled} type="submit" variant="contained" size="large" disableElevation fullWidth>
                                Login
                            </Button>
                        </form>
                    </CardContent>


                </Card>
            </Stack>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                message="I love snacks"
                key={vertical + horizontal}
                TransitionComponent={transition}
            >
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {alert.mess}
                </Alert>

            </Snackbar>
        </Layout >
    )
}

export default Login

