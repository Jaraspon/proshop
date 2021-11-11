import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router';

const local = require('local-storage');
const axios = require('axios');
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation, Trans } from "react-i18next";
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
    IconButton,
    Fade
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: '10px',
            paddingBottom: '30px',
            ['@media (max-width: 599px) ']: {
                // minHeight: 'calc(100vh) ',
                // minHeight: 'calc(100vh - 56px) ',
            },
            '& .marked-link': {
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

const Login = (props: any) => {
    const { clickLink, loadingFade, loadingFadeTime } = props
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        mess: ''
    });

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
        disabled: true,
        showPassword: false,
    })


    const changeInput = (e: any) => {
        e.preventDefault();
        let key = e.target.name;
        let value = e.target.value;
        setDataForm({ ...dataForm, [key]: value })
    }

    const submitLogin = (e: any): void => {
        e.preventDefault();
        setLoadingLogin(true)
        axios.post('/api/auth/login', { username: dataForm.username, password: dataForm.password }).then(function (res: any) {
            const _res = res.data
            if (_res?.status?.success) {
                setAlert({ ...alert, open: false, mess: _res?.status?.message });
                local.set('pethouse_auth', _res.user.token);
            } else {
                console.log('w');

                setAlert({ ...alert, open: true, mess: _res?.status?.message });
            }
            // setTransition(() => TransitionLeft);
            setLoadingLogin(false)

            // router.push(`/`)
        }).catch(function (error: any) {
            console.log(error.response.data.status.message);
            setAlert({ ...alert, open: true, mess: error.response.data.status.message });
            setLoadingLogin(false)
        });
    }

    const handleClickShowPassword = () => {
        setDataForm({ ...dataForm, showPassword: !dataForm.showPassword, });
    };

    const handleMouseDownShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
    };

    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ ...alert, ['open']: false });
    };

    useEffect(() => {
        if (dataForm.username != '' && dataForm.password != '' && dataForm.password.length >= 6) {
            setDataForm({ ...dataForm, disabled: false })
            return;
        }
        setDataForm({ ...dataForm, disabled: true })
    }, [dataForm.username, dataForm.password])

    return (
        <>
            <Fade in={!loadingFade} timeout={loadingFadeTime} >
                <form onSubmit={submitLogin} className={`${classes.root} select-none`}>
                    <Stack
                        sx={{ mb: 3 }}
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >

                        <Logo />


                    </Stack>
                    <Stack
                        sx={{ mb: 3, pl: 1 }}
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        {/* <p>Do you have an account? </p><Link to="/auth/register" style="marked-register">Sign up for <span className="text-uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span></Link> */}
                        <p>{t('text_content_login')} </p><a onClick={() => clickLink(false)} className="marked-link">{t('text_content_login_link')} <span className="text-uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span></a>
                    </Stack>

                    <TextField
                        className="input-hover input-bg"
                        sx={{ mb: 2 }}
                        type="text"
                        fullWidth
                        placeholder={t("input_username_or_email")}
                        name="username"
                        inputProps={{
                            'data-key': 'username'
                        }}
                        onChange={changeInput}
                    />
                    <FormControl fullWidth sx={{ mb: 4 }} className="input-hover input-bg">
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            type={dataForm.showPassword ? 'text' : 'password'}
                            name="password"
                            inputProps={{
                                'data-key': 'password'
                            }}
                            onChange={changeInput}
                            endAdornment={
                                <InputAdornment position="end"  >
                                    <IconButton
                                        color="primary"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownShowPassword}
                                        edge="end"
                                        sx={{ mr: 0.1 }}
                                    >
                                        {dataForm.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                            placeholder={t("input_password")}
                        />
                    </FormControl>
                    <LoadingButton
                        className="btn-main"
                        disabled={dataForm.disabled}
                        type="submit"
                        variant="contained"
                        size="large"
                        disableElevation
                        fullWidth
                        loading={loadingLogin}
                    >
                        {t("btn_login")}
                    </LoadingButton>
                </form>
            </Fade>
            <Snackbar

                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={alert.open}
                message="I love snacks"
                key={alert.vertical + alert.horizontal}
                autoHideDuration={5000}
            // TransitionComponent={transition}

            >

                <Alert
                    severity="error"
                    sx={{ borderRadius: 3 }}
                    action={
                        <>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                sx={{ p: 0.5 }}
                                onClick={handleAlertClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </>
                    }
                >
                    <AlertTitle>Error</AlertTitle>
                    {alert.mess}


                </Alert>

            </Snackbar>
        </>
    )
}

Login.propTypes = {
    clickLink: PropTypes.func,
    loadingFade: PropTypes.bool,
    loadingFadeTime: PropTypes.number
}

export default Login
