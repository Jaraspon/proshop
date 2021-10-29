import styles from '@/styles/Login.module.css'
import { NextPage } from 'next'
import React, { useState } from 'react'

import Layout from '@/components/layout/index';
import Link from '@/components/Link'
import { Container, FormControl, Grid, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}


const useStyles = makeStyles((theme:any) => ({
    root: {
        userSelect:'none',
        '& .box-r':{
            display:'flex',
            marginBottom: '10px'
        }
    },

}));



const Login = () => {
    const classs = useStyles();
    const [values, setValues] = useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    })
    return (
        <Layout user={{}} isAuth={false} >
            <div className={classs.root}>
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

