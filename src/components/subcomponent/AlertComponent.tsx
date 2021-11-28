import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    Snackbar,
    Alert,
    IconButton,
    AlertTitle,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PropsType {
    alert: {
        open: boolean,
        vertical: "top" | "bottom",
        horizontal: "left" | "center" | "right",
        severity: string,
        durationTime: number,
        mess: string
    },
    onAlert: Function
}

const AlertComponent = ({ alert, onAlert }: PropsType) => {
    useEffect(() => {
        console.log(alert);

    }, [])
    const { vertical, horizontal, severity, open, durationTime, mess } = alert;
    const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        onAlert({ ...alert, ['open']: false });
    };
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message=""
            // key={vertical + horizontal}
            autoHideDuration={durationTime}
            onClose={handleAlertClose}
        >
            {severity === 'error' ? (
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
                    {mess}
                </Alert>
            ) : (severity === 'warning' ? (
                <Alert
                    severity="success"
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
                    <AlertTitle>Warning</AlertTitle>
                    {mess}
                </Alert>
            ) : (severity === 'warning' ? (
                <Alert
                    severity="warning"
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
                    <AlertTitle>Success</AlertTitle>
                    {mess}
                </Alert>
            ) : (severity === 'info' ? (
                <Alert
                    severity="info"
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
                    <AlertTitle>Info</AlertTitle>
                    {mess}
                </Alert>
            ) : (
                <Alert
                    severity="success"
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
                    <AlertTitle>Success</AlertTitle>
                    {mess}
                </Alert>
            ))))}

        </Snackbar>
    )
}


export default AlertComponent
