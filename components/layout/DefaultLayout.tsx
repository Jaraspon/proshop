
import React from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/system';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

// Component
import AppBarComponent from '@/components/C_AppBar';
import NavbarComponent from '@/components/C_Navbar';
import AuthComponent from '@/components/auth/Auth';

interface NewsFeedItemProps {
    user: object,
    isAuth: boolean,
    showLayout?: boolean

}


const DefaultLayout: NextPage<NewsFeedItemProps> = ({ children, user = {}, isAuth = false, showLayout = true }) => {
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    
    return (
        <>
            <AppBarComponent />
            {(!counter.pathLogin) && <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '65px' },pb: { xs: '65px', md: '0px' } }}>{children}</Box>}
            {(counter.pathLogin) && <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '65px' },pb: { xs: '65px', md: '0px' } }}><AuthComponent /></Box>}
            <NavbarComponent />
        </>
    )
}

DefaultLayout.propTypes = {
    user: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    showLayout: PropTypes.bool,
}


export default DefaultLayout

