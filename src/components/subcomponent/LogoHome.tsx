import { createStyles, makeStyles } from '@mui/styles';
import React, { useState } from 'react';
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
import { useRouter } from 'next/router';

const StyledBoxLogo = styled('section')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px',
    userSelect: 'none',
    ['@media (max-width: 666px)']: {
        minHeight: '250px',
    }
}));
const StyledBoxImg = styled('div')(({ theme }) => ({
    '& img': {
        height: '337px',
        paddingRight: '10px !important',
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

const StyledForm = styled('form')(({ theme }) => ({

}));


interface PropTypes {
    title: string,
    image: string,
    button: string
}


export default function LogoComponent({ title, image, button }: PropTypes) {
    const { t, i18n } = useTranslation();
    const [word1, word2, word3, word4] = title.split("|");
    const router = useRouter();
    const [dataForm, setDataForm] = useState({
        search: ''
    })

    const changeInput = (e: any) => {
        e.preventDefault();
        let key = e.target.name;
        let value = e.target.value;
        setDataForm({ ...dataForm, [key]: value })
    }

    const submitSearch = (e: any) => {
        e.preventDefault();
        console.log('dataForm :>> ', dataForm);
        setDataForm({ search: '' })
        router.push({
            pathname: 'search',
            query: { 'keyword': dataForm.search }
        });
     
    }
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
                    <StyledForm onSubmit={submitSearch}>
                        <StyledFormControl fullWidth sx={{ mb: 0 }}>
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <StyledOutlinedInput
                                type='text'
                                name="search"
                                inputProps={{
                                    'data-key': 'search',
                                    'autoComplete':'off'
                                }}
                                onChange={changeInput}
                                value={dataForm.search}
                                endAdornment={
                                    <InputAdornment position="end"  >
                                        <IconButton
                                            type="submit"
                                            color="primary"
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            sx={{ mr: 0.1, mb:0 }}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }

                                placeholder={t("input_search")}
                            />
                        </StyledFormControl>
                    </StyledForm>
                </StyledBoxText>
            </StyledBoxLogo>
        </>
    )
}
