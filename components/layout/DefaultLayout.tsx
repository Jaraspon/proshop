
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/system';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

// Component
import AppBarComponent from '@/components/AppBarComponent';
import NavbarComponent from '@/components/NavbarComponent';
import AuthComponent from '@/components/auth/AuthComponent';
import { Fade } from '@mui/material';

interface NewsFeedItemProps {
    user: object,
    isAuth: boolean,
    showLayout?: boolean

}


const DefaultLayout: NextPage<NewsFeedItemProps> = ({ children, user = {}, isAuth = false, showLayout = true }) => {
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(user);
        
    }, [])
    return (
        <>
            <AppBarComponent user={user} isAuth={isAuth} />
            {(!counter.pathLogin || counter.auth || isAuth) && <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '65px' }, pb: { xs: '65px', md: '0px' } }}><Fade in={true} timeout={300} ><div>{children}</div></Fade></Box>}
            {(counter.pathLogin) && <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '65px' }, pb: { xs: '65px', md: '0px' } }}><AuthComponent /></Box>}
            <NavbarComponent user={user} isAuth={isAuth}/>
        </>
    )
}

DefaultLayout.propTypes = {
    user: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    showLayout: PropTypes.bool,
}


export default DefaultLayout

