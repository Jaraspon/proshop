import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { makeStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, Button, Drawer, Fade, IconButton, InputBase, Menu, MenuItem, styled, Divider, Tooltip, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@/components/Link'
import AuthComponent from '@/components/auth/Auth';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from "react-i18next";

import { logoutStore } from '@/store/actions';
import Cookies from 'js-cookie'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ImHome } from 'react-icons/im';
import { MdPets } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';

interface NewsFeedItemProps {
    user: object,
    isAuth: boolean,
    showLayout?: boolean

}



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid #e5e8ec',
    borderRadius: '9px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid rgb(228, 228, 228) ',
    color: '#616060',
    maxHeight: '64px',
    userSelect: 'none',

    '& .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const StyledBtnIcon = styled(Button)(({ theme }) => ({
    border: '1px solid #e5e8ec',
    borderRadius: '9px',
    color: '#7a7a7a',
    minWidth: '39px',
    minHeight: '39px',
    background: '#fff',
    '& svg': {
        fontSize: '1.3rem'
    }
}));

const StyledBtn = styled(Button)(({ theme }) => ({
    border: '1px solid #e5e8ec',
    borderRadius: '9px',
    color: '#7a7a7a',
    minWidth: '39px',
    minHeight: '39px',
    background: '#fff',
    paddingLeft: '15px',
    paddingRight: '15px',
}));


const useStyles = makeStyles((theme: any) => ({
    menuBotton: {
        '& .icon-2x': {
            fontSize: '1.5rem',
            width: '1em',
            height: '1em',
            flexShrink: 0
        }
    },

}));


const Layout: NextPage<NewsFeedItemProps> = ({ children, user, isAuth, showLayout = true }) => {
    const classes = useStyles()
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const [goLogin, setGoLogin] = useState(false)
    const [isAuthLogin, setIsAuthLogin] = useState(isAuth)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        setAnchorEl(null);
    };
    const logout = () => {

        setIsAuthLogin(false)
        dispatch(logoutStore())
    }

    useEffect(() => {
        console.log("L_auth", isAuth);

    }, [isAuth])
    useEffect(() => {
        console.log(counter);
        if (Cookies.get("pethouse_auth") && counter.auth) {
            setIsAuthLogin(counter.auth)
            setGoLogin(!counter.auth)
        }
    }, [counter])
    const drawer = (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                >
                    <ListItemIcon>sdgsdg</ListItemIcon>
                    <ListItemText primary={'dfhdfh'} />
                </ListItem>
                <ListItem
                    button
                >
                    <ListItemIcon>Cart</ListItemIcon>
                    <ListItemText primary={'Cart'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <CssBaseline />
            {showLayout && (<>
                <StyledAppBar position="fixed" sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '0 0 10px 10px' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ width: '150px' }} >

                            <a onClick={async () => { router.push('/'); setGoLogin(false); }}>{process.env.NEXT_PUBLIC_APP_NAME}</a>
                        </Typography>
                        <div className={classes.menuBotton}>
                            <BottomNavigation
                                className={classes.menuBotton}
                                showLabels
                                sx={{ borderRadius: '10px 10px 0px 0px', width: '50vw' }}
                            >
                                <BottomNavigationAction label="Home" icon={<HomeIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                                <BottomNavigationAction label="Pet" icon={<PetsIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                                <BottomNavigationAction label="Chat" icon={<IoIosChatbubbles className="icon-2x" />} sx={{ borderRadius: 2 }} />
                                <BottomNavigationAction label="Chat" icon={<AccountCircleIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                            </BottomNavigation>
                        </div>
                        <Box sx={{ display: 'flex', width: '150px' }}>
                            <Box sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1.5 }}>
                                <Tooltip title="Change language">
                                    <StyledBtnIcon

                                        aria-controls="fade-menu"
                                        aria-haspopup="true"
                                        aria-expanded={openMenu ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <TranslateIcon />
                                    </StyledBtnIcon>
                                </Tooltip>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
                                    <MenuItem onClick={() => changeLanguage("th")}>Thai</MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>Help to translate</MenuItem>
                                </Menu>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', sm: 'flex' } }}>
                                {isAuthLogin ? (
                                    <Tooltip title="Login">
                                        <Button
                                            variant="outlined"
                                            onClick={() => logout()}
                                        >
                                            {t("btn_logout")}
                                        </Button>
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Login">
                                        <Button
                                            variant="outlined"
                                            onClick={() => setGoLogin(true)}
                                        >
                                            {t("btn_login")}
                                        </Button>
                                    </Tooltip>
                                )}

                            </Box>
                        </Box>


                    </Toolbar>

                </StyledAppBar>
                <Box display={{ xs: 'block', sm: 'block', md: 'block' }} >
                    <Drawer
                        anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
                <Paper sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0, borderRadius: '10px 10px 0px 0px', zIndex: 2 }} elevation={3}>
                    <BottomNavigation
                        className={classes.menuBotton}
                        showLabels
                        sx={{ borderRadius: '10px 10px 0px 0px', height: '65px', p: 1 }}
                    >
                        <BottomNavigationAction label="Home" icon={<HomeIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                        <BottomNavigationAction label="Pet" icon={<PetsIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                        <BottomNavigationAction label="Chat" icon={<IoIosChatbubbles className="icon-2x" />} sx={{ borderRadius: 2 }} />
                        <BottomNavigationAction label="Chat" icon={<AccountCircleIcon className="icon-2x" />} sx={{ borderRadius: 2 }} />
                    </BottomNavigation>
                </Paper>
            </>)
            }



            {(!goLogin) && <main><Box sx={{ pt: 3, pb: { xs: '100px', md: '30px' } }}>{children} </Box></main>}

            {(goLogin) && <AuthComponent />}


        </>
    )
}

export default Layout

