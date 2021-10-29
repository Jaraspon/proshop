
import styles from '@/styles/Layout.module.css'
import React, { useState } from 'react'
import { NextPage } from 'next'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, Button, Drawer, Fade, IconButton, InputBase, Menu, MenuItem, styled, Divider, Tooltip } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';

interface NewsFeedItemProps {
    user: object,
    isAuth: boolean

}



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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
// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//     background-color: #fff !important;
//     boxShadow: none !important;
//     border-bottom: 1px solid rgb(228, 228, 228) !important;
//     color: #616060 !important;
//     max-height: 64px !important;
//     user-select: none !important;
// }));

const index: NextPage<NewsFeedItemProps> = ({ children, user, isAuth }) => {
    console.log('user', user);
    console.log('isAuth', isAuth);



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
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

            <AppBar position="fixed" sx={{ background: '#fff', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Proshop
                    </Typography>
                    {/* <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
                        <IconButton onClick={toggleDrawer('right', true)} edge="start" className="" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Box> */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, mr: 1.5 }}>
                        <Search className={`${styles.btnAppBar}`}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1.5 }}>
                        <Tooltip title="Shopping cart">
                            <Button
                                className={`btn-app-bar ${styles.btnStore}`}
                                id="fade-button"
                            >
                                <LocalGroceryStoreIcon />
                            </Button>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1.5 }}>
                        <Tooltip title="Change language">
                            <Button
                                className={`btn-app-bar ${styles.btnLanguage}`}
                                id="fade-button"
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <TranslateIcon />
                            </Button>
                        </Tooltip>
                        <Menu
                            className={`${styles.menuAppBar}`}
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}


                        >
                            <MenuItem onClick={handleClose}>English</MenuItem>
                            <MenuItem onClick={handleClose}>中文</MenuItem>
                            <MenuItem onClick={handleClose}>Thai</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Help to translate</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' } }}>
                        <Tooltip title="Login">
                            <Button
                                className={`btn-app-bar ${styles.btnLogin}`}
                                id="fade-button"
                            >
                                Login
                            </Button>
                        </Tooltip>
                    </Box>
                </Toolbar>

            </AppBar>
            <Box display={{ xs: 'block', sm: 'block', md: 'block' }} >
                <Drawer
                    anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}
                    className={styles.drawer}

                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />

            <main>{children}</main>



        </>
    )
}

export default index

