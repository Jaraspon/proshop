import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import { useTranslation, Trans } from "react-i18next";
import Cookies from 'js-cookie'

var local = require('local-storage');
import axios from '@axios'



import LoginComponent from '@/src/components/auth/LoginComponent'
import RegisterComponent from '@/src/components/auth/RegisterComponent'


const LoadingComponent = dynamic(() => import('@/src/components/subcomponent/Loading'))

import AlertComponent from '@/src/components/subcomponent/AlertComponent'
import {
    Container,
    Stack,
    Box
} from '@mui/material';


interface PropsType {

}

const Auth = ({ }: PropsType) => {
    const [routerPath, setRouterPath] = useState(true)
    const [checked, setChecked] = useState(false)
    const { t, i18n } = useTranslation()


    const [alert, setAlert] = useState({
        open: false,
        severity: '',
        durationTime: 3000,
        mess: ''
    });
    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ ...alert, ['open']: false });
    };
    useEffect(() => {
        setTimeout(() => {
            setChecked(false)
        }, 500);
    }, [routerPath])

    const clickLink = async (res: any) => {
        await setChecked(true)
        setTimeout(() => {
            setRouterPath(res)
        }, 1000);
    }

    useEffect(() => {
        console.log(alert);

    }, [alert])


    return (
        <>
            <LoadingComponent loading={checked} />
            <Container fixed  >
                <Stack
                    direction="column"
                    justifyContent={{ sm:"flex-start"}}
                    alignItems="center"
                    spacing={1}
                    sx={{ height: 'calc(100vh - 85px)' }}

                >
                    <Box component="div" sx={{ maxWidth: 420    , pt: '76px' }}>
                        {routerPath ? (
                            <LoginComponent alert={alert} setAlert={setAlert} clickLink={clickLink} loadingFade={checked} loadingFadeTime={300} />
                        ) : (
                            <RegisterComponent alert={alert} setAlert={setAlert} clickLink={clickLink} loadingFade={checked} loadingFadeTime={300} />
                        )}

                    </Box>
                </Stack>
            </Container>
            <AlertComponent
                alert={{
                    open: alert.open,
                    vertical: "top",
                    horizontal: "right",
                    severity: alert.severity,
                    durationTime: alert.durationTime,
                    mess: alert.mess
                }}
                onAlert={setAlert}
            />
        </>
    )
}

export default Auth
