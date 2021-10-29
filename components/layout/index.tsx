import React, { useState } from 'react'
import { NextPage } from 'next'
import { makeStyles } from '@mui/styles';

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
    root: {

    },

}));


const Layout: NextPage<NewsFeedItemProps> = ({ children, user, isAuth }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
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

            <StyledAppBar position="fixed" >
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
                        <Search>
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
                            <StyledBtnIcon
                                id="fade-button"
                            >
                                <LocalGroceryStoreIcon />
                            </StyledBtnIcon>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1.5 }}>
                        <Tooltip title="Change language">
                            <StyledBtnIcon
                                id="fade-button"
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
                            <MenuItem onClick={handleClose}>English</MenuItem>
                            <MenuItem onClick={handleClose}>中文</MenuItem>
                            <MenuItem onClick={handleClose}>Thai</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>Help to translate</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' } }}>
                        <Tooltip title="Login">
                            <StyledBtn
                                id="fade-button"
                            >
                                Login
                            </StyledBtn>
                        </Tooltip>
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
            <Toolbar />

            <main>{children}</main>



        </>
    )
}

export default Layout

