import { Box } from '@mui/system'
import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: `250px`,
            position: `relative`,
            height: `220px`,
            '& .iconDog':{
                position: `absolute`,
                display: `flex`,
                color: `#7DA9F8`,
                fontSize: `12rem`,
            },
            '& .iconCat':{
                position: `absolute`,
                right: `10px`,
                bottom: `0`,
                color: `#69C1FE`,
                display: `flex`,
                fontSize: `9rem`,
            }
        },
    }),
);

const Logo = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.root}>
            <Box component="span" className="iconDog">
                <i className="fas fa-dog fa-flip-horizontal"></i>
            </Box>
            <Box component="span"  className="iconCat">
                <i className="fas fa-cat"></i>
            </Box>
        </Box>
    )
}

export default Logo
