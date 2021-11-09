import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { FaDog, FaCat } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: `250px`,
            position: `relative`,
            height: `220px`,
            '& .iconDog': {
                position: `absolute`,
                display: `flex`,
                color: `#7DA9F8`,
                fontSize: `13rem`,
            },
            '& .iconCat': {
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

    useEffect(() => {
        console.log('logo');

    }, [])
    return (
        <Box component="div" className={classes.root}>
            <Box component="span" className="iconDog">
                <FaDog className="fa-flip-horizontal" />
                {/* <i className="fas fa-dog fa-flip-horizontal"></i> */}
            </Box>
            <Box component="span" className="iconCat">
                <FaCat className="" />
                {/* <i className="fas fa-cat"></i> */}
            </Box>
        </Box>
    )
}

export default Logo
