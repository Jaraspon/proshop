import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '@/components/layout/index';
import Link from '@/components/Link'
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
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';

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


const Register = (props: any) => {
    const { clickLink, loadingFade, loadingFadeTime } = props
    const classes = useStyles();
    const [loadingRegister, setLoadingRegister] = useState(false);
    const { t, i18n } = useTranslation()
    const [alert, setAlert] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        mess: ''
    });
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
    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ ...alert, ['open']: false });
    };
    const submitRegister = (e: any): void => {
        e.preventDefault();
        setLoadingRegister(true)
    }
    useEffect(() => {
        var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
                <form onSubmit={submitRegister} className={`${classes.root} select-none`}>
                    <Stack
                        sx={{ mb: 3, pl: 1 }}
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        {/* <p>Already have an account? </p><Link to="/auth/login" style="marked-register">Sign in for PROSHOP</Link> */}
                        <p>{t("text_content_register")} </p><a onClick={() => clickLink(true)} className="marked-link">{t("text_content_register_link")} <span className="text-uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span></a>
                    </Stack>
                    <TextField
                        className="input-hover input-bg"
                        sx={{ mb: 2 }}
                        type="text"
                        fullWidth
                        label=""
                        placeholder={t("input_username")}
                        name="username"
                        inputProps={{
                            'data-key': 'username'
                        }}
                        onChange={changeInput}
                    />
                    <FormControl fullWidth sx={{ mb: 2 }} className="input-hover input-bg">
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
                    </FormControl>

                    <TextField
                        className="input-hover input-bg"
                        sx={{ mb: 2 }}
                        type="email"
                        fullWidth
                        label=""
                        placeholder={t("input_email")}
                        name="email"
                        inputProps={{
                            'data-key': 'email'
                        }}
                        onChange={changeInput}
                    />
                    <Box
                        component="span"
                        sx={{ display: { xs: 'block', sm: 'flex' } }}
                    >
                        <TextField
                            className="input-hover input-bg"
                            label=""
                            fullWidth
                            sx={{ mb: 2, mr: 1 }}
                            placeholder={t("input_firstname")}
                            name="firstname"
                            inputProps={{
                                'data-key': 'firstname'
                            }}
                            onChange={changeInput}
                        />
                        <TextField
                            className="input-hover input-bg"
                            label=""
                            fullWidth
                            sx={{ mb: 2 }}
                            placeholder={t("input_lastname")}
                            name="lastname"
                            inputProps={{
                                'data-key': 'lastname'
                            }}
                            onChange={changeInput}
                        />
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

Register.propTypes = {
    clickLink: PropTypes.func,
    loadingFade: PropTypes.bool,
    loadingFadeTime: PropTypes.number
}

export default Register
