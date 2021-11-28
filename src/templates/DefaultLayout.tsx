
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/system';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

// Component
import AppBarComponent from '@/src/components/component/AppBarComponent';
import NavbarComponent from '@/src/components/component/NavbarComponent';
import AuthComponent from '@/src/components/auth/AuthComponent';
import { Container, Fade } from '@mui/material';

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
            {(!counter.pathLogin || counter.auth || isAuth) &&
                <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '85px' }, pb: { xs: '85px', md: '0px' } }}>
                    <Fade in={true} timeout={300}>
                        <div className="main-layout">
                        <Container fixed>
                            {children}
                            </Container>
                            </div>
                    </Fade>
                </Box>
            }
            {(counter.pathLogin) &&
                <Box className="main" component="main" sx={{ pt: { xs: '0px', md: '85px' }, pb: { xs: '85px ', md: '0px' } }}>
                    <div className="main-layout">
                        {/* <Container fixed> */}
                          <AuthComponent />
                            {/* </Container> */}
                            </div> 
                </Box>
            }
            <NavbarComponent user={user} isAuth={isAuth} />
        </>
    )
}

DefaultLayout.propTypes = {
    user: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    showLayout: PropTypes.bool,
}


export default DefaultLayout

