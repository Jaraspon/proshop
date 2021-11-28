import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Drawer, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import { pathLoginStore } from '@/store/actions';
var local = require('local-storage');

// COMPONENT
import ButtonLanguage from '@/src/components/subcomponent/ButtonLanguage'

// ICON
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IoIosChatbubbles } from 'react-icons/io';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    padding: '10px',
    background: `#ffffff !important`,
    paddingBottom: `0 !important`,
    boxShadow: 'none',
    borderBottom: 'none',
    color: '#616060',
    // maxHeight: '64px',
    minHeight: '64px',
    userSelect: 'none',

    '& .MuiToolbar-root': {
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '10px',
        minHeight: '64px',
        maxHeight: '64px',
        boxShadow: '2px 2px 7px #cfcfcf',
    }
}));

const StyledTitle = styled('h2')(({ theme }) => ({
    cursor: 'pointer',
    margin: 0,
    paddingLeft: '8px'
}));

const StyledBoxLeft = styled(Box)(({ theme }) => ({
    width: '200px',
    display: 'flex',
    alignItems: 'center'
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
    width: '450px'
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    color: `${theme.palette.primary.main}`,
    fontSize: '1.5rem',
    borderRadius: '10px',
    '& .MuiBottomNavigationAction-label':{
        fontSize: '0.5rem',
    },
    '&:hover': {
        background: `${theme.palette.primary.main}30`,
    },
    '&.action': {
        color: `#545454 !important`,
        pointerEvents: 'none'
    }
}));

interface PropsType {
    user: object,
    isAuth: boolean
}


const C_AppBar = ({ user, isAuth }: PropsType) => {
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
                    <StyledBoxLeft component="div" data-route="/"  onClick={clickToRoute}>
                        <Image
                            src="/LogoS.png"
                            alt="Logo web"
                            width={27}
                            height={27}
                            className="cursor-pointer"
                        />
                        <StyledTitle className="title-app-bar" >
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
                                label={t("cart")}
                                icon={<ShoppingCartIcon />}
                                data-route="/cart"
                                onClick={clickToRoute}
                            />
                            <StyledBottomNavigationAction
                                className={`${(router.pathname === "/chat" && !counter.pathLogin) && "action"}`}
                                label={t("chat")}
                                icon={<IoIosChatbubbles />}
                                data-route="/chat"
                                onClick={clickToRoute}
                            />
                            {isAuth || counter.auth ? (
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
