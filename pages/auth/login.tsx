import { NextPage } from 'next'
import React, { useState } from 'react'

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
    TextField
} from '@mui/material';
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
            }
        },
    }),
);




const Login = () => {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    })
    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    })

    const login = (e: any): void => {
        console.log(dataForm);

        alert('The name you entered was: ${name}');
        e.preventDefault();
        axios.post('/api/auth/login', dataForm).then(function (response: any) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }



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
                        <form onSubmit={login}>
                            <Stack
                                sx={{ mb: 3 }}
                                direction={{ xs: 'column', sm: 'row' }}
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <p>Do you have an account? &nbsp; </p><Link to="/auth/register" style="marked-register">Sign up for PROSHOP</Link>
                            </Stack>
                            <TextField
                                sx={{ mb: 2 }}
                                type="email"
                                fullWidth
                                label="Username or Email"
                                onChange={e => setDataForm({ ...dataForm, ['username']: e.target.value })}
                            />
                            <TextField
                                sx={{ mb: 2 }}
                                type="password"
                                fullWidth
                                label="Password"
                                onChange={e => setDataForm({ ...dataForm, ['password']: e.target.value })}
                            />
                            <Button type="submit" variant="contained" size="large" disableElevation fullWidth>
                                Login
                            </Button>
                        </form>
                    </CardContent>


                </Card>
            </Stack>
        </Layout >
    )
}

export default Login

