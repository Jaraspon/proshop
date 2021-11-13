import React from 'react'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@mui/styles';
import { Fade, Theme } from '@mui/material';
import { Box } from '@mui/system';

import { MdPets } from 'react-icons/md';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#fff',
            position: 'fixed',
            display: 'flex',
            width: '100%',
            height: 'calc(var(--vh, 1vh) * 100);',
            zIndex: 99999,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            '& .box': {
                width: '200px',
                height: '155px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                flexDirection: 'column',
            },
            '& .text': {
                fontSize: '3rem',
                color: '#829fed',
                fontWeight: 400,
                fontFamily: `'Niconne', cursive !important`
            },

        },
    }),
);


const LoadingOne = (props: any) => {
    const { loading } = props
    const classes = useStyles();
    return (
        <>
            <Fade in={loading} timeout={2000} >
                <div className={classes.root}>
                    <div className="box">
                        <img className="logo" src="/Logo-web.png" alt="Logo" />
                    <p className="text">Pet House</p>
                    </div>

                </div>
            </Fade>



        </>
    )
}

LoadingOne.propTypes = {
    loading: PropTypes.bool
}

export default LoadingOne
