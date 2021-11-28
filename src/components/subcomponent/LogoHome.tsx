import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import Image from 'next/image'
import { useTranslation, Trans } from "react-i18next";
import { styled } from '@mui/system';
import {
    Container,
    FormControl,
    Grid,
    OutlinedInput,
    Button,
    Theme,
    Stack,
    Card,
    CardContent,
    TextField,
    Alert,
    Snackbar,
    AlertTitle,
    Slide,
    SlideProps,
    InputLabel,
    InputAdornment,
    IconButton,
    Fade,
    TextFieldProps,
    OutlinedInputProps
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// const useStyles = makeStyles((theme) =>
//     createStyles({
//         main: {
//             width: '100%',
//             height: '100vh',
//             backgroundImage: `url(${"/bg.png"})`,
//             backgroundSize: '800px',
//             backgroundPosition: 'center',
//             position: 'relative',
//             ['@media (max-width: 1024px)']: {
//                 backgroundSize: '600px',
//             },
//             ['@media (max-width: 900px) and (orientation: landscape)']: {
//                 height: '130vh',
//             },
//             ['@media (max-width: 600px)']: {
//                 height: '100vh',
//             },
//             '& .m-img': {
//                 position: 'absolute',
//                 left: '15%',
//                 top: '50%',
//                 transform: 'translate(-15%,-50%)',
//                 userSelect: 'none',
//                 ['@media (max-width: 900px)']: {
//                     display: 'none'
//                 },
//                 ['@media (max-width: 666px)']: {
//                     display: 'none'
//                 }
//             },
//             '& .m-img img': {
//                 height: '450px',
//                 ['@media (max-width: 1024px)']: {
//                     height: '350px'
//                 }
//             },
//             '& .m-text': {
//                 position: 'absolute',
//                 top: '40%',
//                 right: '10%',
//                 ['@media (max-width: 900px)']: {
//                     left: '50%',
//                     top: '50%',
//                     transform: 'translate(-50%,-50%)',
//                 },
//                 ['@media (max-width: 666px)']: {
//                     transform: 'none',
//                     left: '0%',
//                     top: '45%',
//                     overflowWrap: 'break-word',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     margin: 'auto',
//                 }
//             },
//             '& .m-text h1,h2': {
//                 fontWeight: 'bold',
//                 margin: '0px',
//                 lineHeight: '70px',
//                 fontSize: '4rem',
//                 textShadow: '2px 2px 10px rgba(0,0,0,0.08)',
//                 letterSpacing: '3px',
//                 color: '#3D3D4A',
//                 textTransform: 'uppercase',
//                 userSelect: 'none',
//                 ['@media (max-width: 1024px)']: {
//                     fontSize: '3.5rem'
//                 },
//                 ['@media (max-width: 666px)']: {
//                     fontSize: '2.5rem',
//                     lineHeight: '40px',
//                     margin: '0px 20px',
//                 }
//             },
//             '& .m-text h1': {
//                 letterSpacing: '23px',
//                 ['@media (max-width: 666px)']: {
//                     letterSpacing: '15px',
//                 }
//             },
//             '& .m-text h1 b,.m-text h2 b': {
//                 color: '#5e7cf7',
//             },
//             '& .m-btn': {
//                 width: '150px',
//                 height: '40px',
//                 backgroundColor: '#2f2e41',
//                 boxShadow: '2px 2px 30px rgba(0,0,0,0.1)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: '10% 10% 10% 10% / 50% 50% 50% 50%',
//                 marginTop: '20px',
//                 color: '#fff',
//                 fontWeight: 600,
//                 letterSpacing: '0.5px',
//                 fontSize: '1rem',
//                 userSelect: 'none',
//                 ['@media (max-width: 666px)']: {
//                     margin: '20px 0px 0px 20px'
//                 }
//             },
//             '& .m-btn:hover': {
//                 color: '#FFFFFF',
//                 background: '#6e64ff',
//                 transition: 'all ease 0.5s',
//             }
//         }
//     })
// );

const StyledBoxLogo = styled('section')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px',
    userSelect: 'none',
}));
const StyledBoxImg = styled('div')(({ theme }) => ({
    '& img': {
        height: '450px',
        paddingRight:'10px !important',
        ['@media (max-width: 666px)']: {
            display: 'none !important'
        }
    }
}));
const StyledBoxText = styled('div')(({ theme }) => ({
    '& h1,h2': {
        fontWeight: 'bold',
        margin: '0px',
        lineHeight: '70px',
        fontSize: '4rem',
        textShadow: '2px 2px 10px rgba(0,0,0,0.08)',
        letterSpacing: '3px',
        color: '#3D3D4A',
        textTransform: 'uppercase',
        userSelect: 'none',
        ['@media (max-width: 1024px)']: {
            fontSize: '3.5rem'
        },
        ['@media (max-width: 666px)']: {
            fontSize: '2.5rem',
            lineHeight: '40px',
            margin: '0px 20px',
        }
    },
    '& h1': {
        letterSpacing: '23px',
    },
    '& h2': {

        paddingBottom: '20px'
    },
    '& b': {
        color: `${theme.palette.primary.main}`
    }
}));
const StyledBoxSe = styled('div')(({ theme }) => ({

}));
const StyledFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        background: '#fff',
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main}`
        },
    },
}));
const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    borderRadius: '999px',
    padding: '0 15px',
    height: '46px',

}));


interface PropTypes {
    title: string,
    image: string,
    button: string
}


export default function LogoComponent({ title, image, button }: PropTypes) {
    const { t, i18n } = useTranslation();
    const [word1, word2, word3, word4] = title.split("|");
    return (
        <>
            <StyledBoxLogo>
                <StyledBoxImg>
                    <Image
                        alt="Logo"
                        src={image}
                        width={150}
                        height={150}
                    />
                </StyledBoxImg>
                <StyledBoxText>
                    <h1>{word1}<b>{word2}</b></h1>
                    <h2>{word3}<b>{word4}</b></h2>
                    {/* <a className="m-btn">{button}</a> */}
                    <StyledFormControl fullWidth sx={{ mb: 4 }}>
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <StyledOutlinedInput
                            type='text'
                            name="search"
                            inputProps={{
                                'data-key': 'search'
                            }}

                            endAdornment={
                                <InputAdornment position="end"  >
                                    <IconButton
                                        color="primary"
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        sx={{ mr: 0.1 }}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }

                            placeholder={t("input_search")}
                        />
                    </StyledFormControl>
                </StyledBoxText>
            </StyledBoxLogo>
        </>
    )
}
