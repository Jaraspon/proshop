import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Drawer, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { pathLoginStore } from '@/store/actions';


// COMPONENT
import ButtonLanguage from '@/components/ButtonLanguage'

// ICON
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IoIosChatbubbles } from 'react-icons/io';
import LoginIcon from '@mui/icons-material/Login';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    borderBottom: '1px solid rgb(228, 228, 228) ',
    color: '#616060',
    maxHeight: '64px',
    minHeight: '64px',
    userSelect: 'none',
    borderRadius: '0 0 10px 10px',
    '& .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const StyledTitle = styled('h2')(({ theme }) => ({
    cursor: 'pointer',
    margin: 0,
    color: `${theme.palette.primary.main}`,
}));

const StyledBoxLeft = styled(Box)(({ theme }) => ({
    width: '200px',
}));

const StyledBoxCenter = styled(Box)(({ theme }) => ({

}));

const StyledBoxRight = styled(Box)(({ theme }) => ({
    width: '200px',
    display: 'flex',
    justifyContent: 'flex-end'
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '10px 10px 0px 0px',
    width: '50vw'
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    color: `${theme.palette.primary.main}`,
    fontSize: '1.5rem',
    borderRadius: '10px',
    '&:hover': {
        background: `${theme.palette.primary.main}30`,
    },
    '&.action': {
        color: `#545454 !important`,
        pointerEvents: 'none'
    }
}));



const C_AppBar = (props: any) => {
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    const router = useRouter();
    const { t, i18n } = useTranslation();

    const [authLogin, setAuthLogin] = useState(false)
    const [isAuthLogin, setIsAuthLogin] = useState(false)


    const clickToRoute = (e: any) => {
        let { route } = e.currentTarget.dataset
        if (route != "/login") {
            dispatch(pathLoginStore(false))
            router.push(route)
        } else {
            dispatch(pathLoginStore(true))
        }
    }

    const clickLogin = (params: any) => {
        async (params: any) => {
            await router.push('/')
        }
    }

    const clickLogout = (params: any) => {
        async (params: any) => {
            await router.push('/')
        }
    }


    return (
        <>
            <StyledAppBar position="fixed" sx={{ display: { xs: 'none', md: 'block' } }}>
                <Toolbar>
                    <StyledBoxLeft component="div">
                        <StyledTitle data-route="/" onClick={clickToRoute}>
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </StyledTitle>
                    </StyledBoxLeft>
                    <StyledBoxCenter component="div">
                        <StyledBottomNavigation showLabels>
                            <StyledBottomNavigationAction
                                className={`${(router.pathname === "/" && !counter.pathLogin) && "action"}`}
                                label={t("home")}
                                icon={<HomeIcon />}
                                data-route="/"
                                onClick={clickToRoute}
                            />
                            <StyledBottomNavigationAction
                                className={`${(router.pathname === "/pet" && !counter.pathLogin) && "action"}`}
                                label={t("pet")}
                                icon={<PetsIcon />}
                                data-route="/pet"
                                onClick={clickToRoute}
                            />
                            <StyledBottomNavigationAction
                                className={`${(router.pathname === "/chat" && !counter.pathLogin) && "action"}`}
                                label={t("chat")}
                                icon={<IoIosChatbubbles />}
                                data-route="/chat"
                                onClick={clickToRoute}
                            />
                            {isAuthLogin ? (
                                <StyledBottomNavigationAction
                                    className={`${(router.pathname === "/profile" && !counter.pathLogin) && "action"}`}
                                    label={t("profile")}
                                    icon={<AccountCircleIcon />}
                                    data-route="/profile"
                                    onClick={clickToRoute}
                                />
                            ) : (
                                <StyledBottomNavigationAction
                                    className={`${(counter.pathLogin) && "action"}`}
                                    label={t("btn_login")}
                                    icon={<LoginIcon />}
                                    data-route="/login"
                                    onClick={clickToRoute}
                                />
                            )}


                        </StyledBottomNavigation>
                    </StyledBoxCenter>
                    <StyledBoxRight component="div">
                        <Box>
                            <ButtonLanguage />
                        </Box>
                    </StyledBoxRight>
                </Toolbar>
            </StyledAppBar>
        </>
    )
}

C_AppBar.propTypes = {

}

export default C_AppBar
