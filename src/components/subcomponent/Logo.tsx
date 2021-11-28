import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { FaDog, FaCat } from 'react-icons/fa';
import Image from 'next/image'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: `150px`,
            position: `relative`,
            height: `150px`,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
       <Image
                            src="/LogoO.png"
                            alt="Logo web"
                            width={150}
                            height={150}
                         
                        />
            {/* <Box component="span" className="iconDog">
                <FaDog className="fa-flip-horizontal" />
            
            </Box>
            <Box component="span" className="iconCat">
                <FaCat className="" />
             
            </Box> */}
        </Box>
    )
}

export default Logo
