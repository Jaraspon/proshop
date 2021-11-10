import React from 'react'
import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@mui/styles';
import { Fade, Theme } from '@mui/material';
import { Box } from '@mui/system';

import { MdPets } from 'react-icons/md';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            width: '100%',
            height: '100vh',
            zIndex: 9999999,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            '& .box': {
                position: 'relative',
                width: '350px',
                height: '110px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            '& .box-icon': {
                position: 'relative',
                width: '350px',
                height: '350px',
                '& :nth-child(1)': {
                    fontSize: '3rem',
                    position: 'absolute',
                    left: '38%',
                    top: '10%',
                },
                '& :nth-child(2)': {
                    fontSize: '4rem',
                    position: 'absolute',
                    left: '50%',
                    top: '30%'
                },
                '& :nth-child(3)': {
                    fontSize: '5rem',
                    position: 'absolute',
                },
            }
        },
    }),
);


const Loading = (props: any) => {
    const { loading } = props
    const classes = useStyles();
    return (
        <>
            <Fade in={loading} timeout={300} >
                <div className={`${classes.root} bg-web`}>
                    <div className="box">
                        <div className="ajax-loader">
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                            <div className="paw"><svg className="icon"><MdPets /></svg></div>
                        </div>
                    </div>
                </div>
            </Fade>
           


        </>
    )
}

Loading.propTypes = {
    loading: PropTypes.bool
}

export default Loading
