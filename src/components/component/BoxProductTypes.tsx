import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from "react-i18next";
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { loadCategory } from '@/store/actions'

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: ' #FFFFFF',
    boxShadow: `2px 0px 20px 0px ${theme.palette.primary.main}2b`,
    // margin: '30px auto',
    flexDirection: 'column',
    alignItems: 'start',
    padding: ' 10px 20px',
    marginBottom: '100px',
    position: 'relative',
    backgroundImage: `url(${"bg.png"})`,
    backgroundSize: '1000px',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ['@media (max-width: 666px)']: {
        width: '100%',
    },
    '& .heading': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& h3': {
            color: `${theme.palette.primary.main}`
        }
    }
}));


interface propTypes {
    title: string,
}

const BoxProductTypes = ({ title }: propTypes) => {
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        dispatch(loadCategory())
        
        
    }, [])
    useEffect(() => {
        console.log(counter.categorys);
    }, [counter.categorys])

    return (
        <>
            <StyledBox>
                <div className="heading">
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>fdhdfhdfh</p>
                    <p>fdhdfhdfh</p>
                    <p>fdhdfhdfh</p>
                    <p>fdhdfhdfh</p>
                    <p>fdhdfhdfh</p>
                </div>
            </StyledBox>
        </>
    )
}


export default BoxProductTypes
