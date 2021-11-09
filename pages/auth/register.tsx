import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

import Layout from '@/components/layout/index';
import Link from '@/components/Link'
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
    Box,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
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
            // minHeight: 'calc(100vh - 64px) ',
            minHeight: 'calc(100vh) ',
            paddingTop: '10px',
            justifyContent: 'center',
            ['@media (max-width: 599px) ']: {
                // minHeight: 'calc(100vh - 56px) ',
                minHeight: 'calc(100vh) ',
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
            }
        },
    }),
);
const Register = () => {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
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
        email: '',
        firstname: '',
        lastname: '',
        gender: 0,
        disabled: true
    })

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        setLoading(true)
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
        <Layout user={{}} isAuth={false} showLayout={false}>
            <Container fixed>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    className={classes.root}
                >
                    <Box component="div" sx={{ maxWidth: 420 }}>
                        <form onSubmit={submitRegister} className="user-select">
                            <Stack
                                sx={{ mb: 3 }}
                                direction={{ xs: 'column', sm: 'row' }}
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <p>Already have an account? </p><Link to="/auth/login" style="marked-register">Sign in for PROSHOP</Link>
                            </Stack>
                            <TextField
                                className="input-hover input-bg"
                                sx={{ mb: 2 }}
                                type="text"
                                fullWidth
                                label=""
                                placeholder="Username"
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
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={changeInput}
                                    endAdornment={
                                        <InputAdornment position="end"  >
                                            <IconButton
                                                color="primary"
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
                                    placeholder="Password"
                                />
                            </FormControl>

                            <TextField
                                className="input-hover input-bg"
                                sx={{ mb: 2 }}
                                type="email"
                                fullWidth
                                label=""
                                placeholder="Email"
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
                                    placeholder="First Name"
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
                                    placeholder="Last Name"
                                    name="lastname"
                                    inputProps={{
                                        'data-key': 'lastname'
                                    }}
                                    onChange={changeInput}
                                />
                            </Box>
                            <FormControl component="fieldset" sx={{ mb: 2, pl: 1 }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup row aria-label="gender"
                                    name="gender"
                                    onChange={changeInput}
                                >
                                    <FormControlLabel
                                        sx={{ mr: 5 }}
                                        value="1"
                                        control={<Radio />}
                                        label="Female"


                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio />}
                                        label="Male"

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
                                loading={loading}
                            >
                                Register
                            </LoadingButton>
                        </form>
                    </Box>
                </Stack>
            </Container>
        </Layout>
    )
}

export default Register
