import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation, Trans } from "react-i18next";
import Cookies from 'js-cookie'
const local = require('local-storage');
import axios from '@axios';
import { styled } from '@mui/system';
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
    Fade,
    TextFieldProps,
    OutlinedInputProps
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { loginStore, pathLoginStore } from '@/store/actions';

// ICON
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// COMPONENT
import Logo from '@/components/Logo'
import router from 'next/router';
interface NewsFeedItemProps {
    alert: Object,
    setAlert: Function,
    clickLink: Function,
    loadingFade: boolean,
    loadingFadeTime: number

}


const StyledForm = styled('form')(({ theme }) => ({
    paddingTop: '10px',
    paddingBottom: '30px',
}));

const StyledText = styled('p')(({ theme }) => ({
    userSelect: 'none',
}));

const StyledMarkedText = styled('p')(({ theme }) => ({
    color: `${theme.palette.primary.main} !important`,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    userSelect: 'none',
    cursor: 'pointer'
}));



const StyledFormControl = styled(FormControl)(({ theme }) => ({

    '& .MuiOutlinedInput-root': {
        background: '#fff',
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main}`
        },
    },


}));





const Login: NextPage<NewsFeedItemProps> = ({ alert, setAlert, clickLink, loadingFade = false, loadingFadeTime = 0 }) => {
    const { t, i18n } = useTranslation()
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const [loadingLogin, setLoadingLogin] = useState(false);


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
                local.set('pethouse_auth', _res.user.token);
                Cookies.set('pethouse_auth', _res.user.token);
            } else {
                setAlert({ ...alert, open: true, severity: "error", mess: _res?.status?.message });
            }

            setLoadingLogin(false)
            // router.push('/')
            dispatch(loginStore(true))
            dispatch(pathLoginStore(false))
        }).catch(function (error: any) {
            console.log(error.response.data.status.message);
            setAlert({ ...alert, open: true, severity: "error", mess: error.response.data.status?.message });
            setLoadingLogin(false)
            dispatch(loginStore(false))
        });
    }

    const handleClickShowPassword = () => {
        setDataForm({ ...dataForm, showPassword: !dataForm.showPassword, });
    };

    const handleMouseDownShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
    };



    useEffect(() => {
        if (dataForm.username != '' && dataForm.password != '' && dataForm.password.length >= 6) {
            setDataForm({ ...dataForm, disabled: false })
            return;
        }
        setDataForm({ ...dataForm, disabled: true })
    }, [dataForm.username, dataForm.password]);

    return (
        <>
            <Fade in={!loadingFade} timeout={loadingFadeTime} >
                <StyledForm onSubmit={submitLogin}>
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
                        <StyledText>{t('text_content_login')} </StyledText><StyledMarkedText onClick={() => clickLink(false)}>{t('text_content_login_link')} <span className="text-uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span></StyledMarkedText>
                    </Stack>


                    <StyledFormControl fullWidth sx={{ mb: 2 }}>
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            type="text"
                            fullWidth
                            placeholder={t("input_username_or_email")}
                            name="username"
                            inputProps={{
                                'data-key': 'username'
                            }}
                            onChange={changeInput}
                        />
                    </StyledFormControl>
                    <StyledFormControl fullWidth sx={{ mb: 4 }}>
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
                    </StyledFormControl>
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
                </StyledForm>
            </Fade>
        </>
    )
}


export default Login
