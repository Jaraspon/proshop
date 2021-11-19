import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux'
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
    Box,
    Alert,
    Snackbar,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    IconButton,
    AlertTitle,
    Fade
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { pathLoginStore } from '@/store/actions';

// ICON
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const StyledForm = styled('form')(({ theme }) => ({
    paddingTop: '10px',
    paddingBottom: '30px',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        background: '#fff',
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main}`
        },
    },
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


interface PropTypes {
    alert: any,
    setAlert: Function,
    clickLink: Function,
    loadingFade: boolean,
    loadingFadeTime: number
}

const Register = ({ alert, setAlert, clickLink, loadingFade, loadingFadeTime }: PropTypes) => {
    const { t, i18n } = useTranslation()
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const [loadingRegister, setLoadingRegister] = useState(false);

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        gender: 0,
        disabled: true,
        showPassword: false,
    })
    const handleClickShowPassword = () => {
        setDataForm({ ...dataForm, showPassword: !dataForm.showPassword, });
    };

    const handleMouseDownShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault();
    };
    const changeInput = (e: any) => {
        e.preventDefault();
        let key = e.target.name;
        let value = e.target.value;
        setDataForm({ ...dataForm, [key]: value })
    }

    const submitRegister = (e: any): void => {
        e.preventDefault();
        setLoadingRegister(true);
        axios.post('/api/auth/register', {
            username: dataForm.username,
            password: dataForm.password,
            email: dataForm.email,
            firstname: dataForm.firstname,
            lastname: dataForm.lastname,
            gender: dataForm.gender
        }).then((res) => {
            const _res = res.data
            console.log(`_res`, _res)
            if (_res?.status?.success) {
                setAlert({ ...alert, open: true, severity: 'success', mess: _res?.status?.message });
                clickLink(true)
            } else {
                console.log('w');

                setAlert({ ...alert, open: true, severity: 'error', mess: _res?.status?.message });
            }
            setLoadingRegister(false);
          
        }).catch((err) => {
            console.log(`err.response.data`, err.response.data)
            setAlert({ ...alert, open: true, severity: 'error', mess: err.response.data.status?.message });
            setLoadingRegister(false);
         
        });


    }
    useEffect(() => {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(regex.test(dataForm.email));

        if (dataForm.username != '' && dataForm.password != '' && dataForm.password.length >= 6 && dataForm.email != '' && regex.test(dataForm.email) && dataForm.firstname != '' && dataForm.lastname != '' && dataForm.gender != 0) {
            setDataForm({ ...dataForm, disabled: false })
        } else {
            setDataForm({ ...dataForm, disabled: true })
        }
        console.log('dd', dataForm);
    }, [dataForm.username, dataForm.password, dataForm.email, dataForm.firstname, dataForm.lastname, dataForm.gender])

    return (
        <>
            <Fade in={!loadingFade} timeout={loadingFadeTime} >
                <StyledForm onSubmit={submitRegister}>
                    <Stack
                        sx={{ mb: 3, pl: 1 }}
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        {/* <p>Already have an account? </p><Link to="/auth/login" style="marked-register">Sign in for PROSHOP</Link> */}
                        <StyledText>{t("text_content_register")} </StyledText><StyledMarkedText onClick={() => clickLink(true)}>{t("text_content_register_link")} <span className="text-uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span></StyledMarkedText>
                    </Stack>
                    <StyledFormControl fullWidth sx={{ mb: 2 }} className="input-hover input-bg">
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            className="input-hover input-bg"
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
                    <StyledFormControl fullWidth sx={{ mb: 2 }} className="input-hover input-bg">
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            name="password"
                            id="outlined-adornment-password"
                            type={dataForm.showPassword ? 'text' : 'password'}
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
                    <StyledFormControl fullWidth sx={{ mb: 2 }} className="input-hover input-bg">
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            className="input-hover input-bg"
                            type="email"
                            fullWidth
                            placeholder={t("input_email")}
                            name="email"
                            inputProps={{
                                'data-key': 'email'
                            }}
                            onChange={changeInput}
                        />
                    </StyledFormControl>

                    <Box
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'flex' } }}
                    >
                        <StyledFormControl fullWidth sx={{ mb: 2, mr: 1 }}>
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <OutlinedInput
                                type="text"
                                fullWidth
                                placeholder={t("input_firstname")}
                                name="firstname"
                                inputProps={{
                                    'data-key': 'firstname'
                                }}
                                onChange={changeInput}
                            />
                        </StyledFormControl>
                        <StyledFormControl fullWidth sx={{ mb: 2 }}>
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <OutlinedInput
                                type="text"
                                fullWidth
                                placeholder={t("input_lastname")}
                                name="lastname"
                                inputProps={{
                                    'data-key': 'lastname'
                                }}
                                onChange={changeInput}
                            />
                        </StyledFormControl>
                    </Box>
                    <FormControl component="fieldset" sx={{ mb: 2, pl: 1 }}>
                        <FormLabel component="legend">{t("gender")}</FormLabel>
                        <RadioGroup row aria-label="gender"
                            name="gender"
                            onChange={changeInput}
                        >
                            <FormControlLabel
                                sx={{ mr: 5 }}
                                value="1"
                                control={<Radio />}
                                label={t("male")}
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label={t("female")}
                            />

                        </RadioGroup>
                    </FormControl>
                    <LoadingButton
                        className="btn-main"
                        disabled={dataForm.disabled}
                        type="submit"
                        variant="contained"
                        size="large"
                        disableElevation
                        fullWidth
                        loading={loadingRegister}
                    >
                        {t("btn_register")}
                    </LoadingButton>
                </StyledForm>
            </Fade>

        </>
    )
}

export default Register
