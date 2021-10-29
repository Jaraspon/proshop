import { NextPage } from 'next'
import React, { useState } from 'react'

import Layout from '@/components/layout/index';
import Link from '@/components/Link'
import {
    Container,
    FormControl,
    Grid,
    OutlinedInput,
    Theme,
    Stack,
    Card,
    CardContent
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
            backgroundColor: '#edf7da',
            paddingTop: '10px',
            '& .marked-register': {
                color: `#9c9c9c !important`,
                fontWeight: 'bold'
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
    return (
        <Layout user={{}} isAuth={false} >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                className={classes.root}
            >

                <Card variant="outlined">
                    <CardContent>
                        <Stack
                            sx={{mb:1}}
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                        >
                            <p>Do you have an account? &nbsp; </p><Link to="/auth/register" style="marked-register">Sign up for PROSHOP</Link>
                        </Stack>
                        <p>Username or Email</p>
                        <FormControl sx={{ width: '25ch' }}>
                            <OutlinedInput placeholder="Please enter text" />

                        </FormControl>
                    </CardContent>


                </Card>
            </Stack>
            <div className={classes.root}>
                <Container>
                    <div className="box-center">
                        <div className="box-login">
                            <div className="box-r">
                                <p>Do you have an account? &nbsp; </p><Link to="/auth/register" style="marked-register">Sign up for STORYTELLING</Link>
                            </div>
                            <div className="box-input mb-4">
                                <FormControl sx={{ width: '25ch' }}>
                                    <OutlinedInput placeholder="Please enter text" />

                                </FormControl>

                            </div>
                            <div className="box-btn">
                                {/* <FormControl fullWidth>
                            <Button variant="contained" size="large" color="primary" disableElevation onClick={clickLogin}>Login STORYTELLING</Button>
                        </FormControl> */}
                            </div>

                        </div>
                    </div>
                </Container>
            </div>

        </Layout>
    )
}

export default Login

