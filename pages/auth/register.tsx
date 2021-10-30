import { NextPage } from 'next'
import React, { useState } from 'react'

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
    Box,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
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
const Register = () => {
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

                <Card variant="outlined" sx={{ borderRadius: 5, py: { xs: 3, sm: 3 }, px: { xs: 1, sm: 3 }, maxWidth: 500, m: { xs: 1 } }}>
                    <CardContent>
                        <Stack
                            sx={{ mb: 3 }}
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                        >
                            <p>Already have an account? &nbsp; </p><Link to="/auth/login" style="marked-register">Sign in for PROSHOP</Link>
                        </Stack>
                        <TextField
                            sx={{ mb: 2 }}
                            type="text"
                            fullWidth
                            label="Username"
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            type="password"
                            fullWidth
                            label="Password"
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            type="email"
                            fullWidth
                            label="Email"
                        />
                        <Box
                            component="form"
                            sx={{ display: { xs: 'block', sm: 'flex' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                label="First Name"
                                fullWidth
                                sx={{ mb: 2, mr: 1 }}
                            />
                            <TextField
                                label="Last Name"
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        </Box>
                        <FormControl component="fieldset" sx={{ mb: 2, pl: 1 }}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel  sx={{ mr:5 }} value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />

                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" size="large" disableElevation fullWidth>
                            Register
                        </Button>
                    </CardContent>


                </Card>
            </Stack>
        </Layout>
    )
}

export default Register
