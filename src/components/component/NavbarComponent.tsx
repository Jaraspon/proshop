import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Drawer, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useTranslation, Trans } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { pathLoginStore } from '@/store/actions';

// ICON
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IoIosChatbubbles } from 'react-icons/io';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '10px',
    zIndex: 15000,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    paddingTop: '0px'
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '100%',
    height: '65px',
    padding: '5px',
    boxShadow: '2px 2px 7px #cfcfcf',
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    color: `${theme.palette.primary.main}`,
    fontSize: '1.5rem',
    borderRadius: '10px',
    '& .MuiBottomNavigationAction-label': {
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


const Navbar = ({ user, isAuth }: PropsType) => {
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    const router = useRouter();
    const { t, i18n } = useTranslation();

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
    return (
        <StyledPaper sx={{ display: { xs: 'block', md: 'none' } }} elevation={3}>
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
        </StyledPaper>
    )
}

Navbar.propTypes = {

}

export default Navbar
