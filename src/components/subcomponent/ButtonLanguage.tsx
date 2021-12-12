import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, Drawer, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from "react-i18next";

// ICON
import TranslateIcon from '@mui/icons-material/Translate';
const StyledBtnIcon = styled(Button)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}ad`,
    borderRadius: '9px',
    color: '#7a7a7a',
    minWidth: '39px',
    minHeight: '39px',
    background: '#fff',
    '& svg': {
        fontSize: '1.3rem',
        color:`${theme.palette.primary.main}`
    }
}));

const ButtonLanguage = (props: any) => {
    const router = useRouter();
    const { t, i18n } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const changeLanguage = (e: any) => {
        const { language } = e.currentTarget.dataset
        console.log(`e`, e.currentTarget.dataset)
        i18n.changeLanguage(language);
        setAnchorEl(null);
        // if (language == "en") {
        //     router.push(router.pathname,router.pathname, { locale: "en" })
        // } else if (language == "th") {

        //     router.push(router.pathname,router.pathname, { locale: "th" })
        // }
    };
    return (
        <>
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
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                MenuListProps={{ 'aria-labelledby': 'fade-button' }}
                anchorEl={anchorEl}
                open={openMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                onClose={handleClose}
            >
                <MenuItem data-language="en" onClick={changeLanguage}>English</MenuItem>
                <MenuItem data-language="th" onClick={changeLanguage}>Thai</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Help to translate</MenuItem>
            </Menu>
        </>
    )
}

ButtonLanguage.propTypes = {

}

export default ButtonLanguage
