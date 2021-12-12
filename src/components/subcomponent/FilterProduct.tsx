import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from "react-i18next";
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { Box, Button, Collapse, OutlinedInput, FormControl } from '@mui/material';
import { IoOptionsOutline } from 'react-icons/io5';

interface propTypesButton {
    filter: boolean,
    setFilter: Function,
    sx?: object,
    icon?: object,
    text?: string
}

export const ButtonFilterProduct = ({ filter, setFilter, sx, icon, text }: propTypesButton) => {
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    // const [filter, setFilter] = React.useState(false);
    const handleChangeFilter = () => {
        setFilter(!filter);
    };
    useEffect(() => {
        console.log(`text`, typeof icon)
    }, [text])

    return (
        <>
            <StyledBtnIcon
                sx={sx}
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={filter ? 'true' : undefined}
                onClick={handleChangeFilter}
            >
                {/* {children} */}
                {icon}
                {text}
            </StyledBtnIcon>
        </>
    )
}


interface propTypesBox {
    filter?: boolean,
    sx?: object
}
export const BoxFilterProduct = ({ filter = true, sx }: propTypesBox) => {
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    // category
    const { keyword, page = 1, sortBy, order = '', category } = router.query;

    const changeCategory = (e: any) => {
        let keyCategory = e.target.dataset.key
        console.log(`keyCategory`, keyCategory)
        router.push({
            pathname: 'search',
            query: {
                category: keyCategory,
                page: 1,
            }
        })
    }


    let datatest = [
        { id: '00001', title: 'กระเป๋า' },
        { id: '00002', title: 'เสื้อผู้หญิง' },
        { id: '00003', title: 'เสื้อผู้ชาย' },
        { id: '00004', title: 'รองเท้า' },
    ]
    let datatest2 = [
        { id: '00001', title: 'กระเป๋า' },
        { id: '00002', title: 'เสื้อผู้หญิง' },
        { id: '00003', title: 'เสื้อผู้ชาย' },
        { id: '00004', title: 'รองเท้า' },
    ]

    return (
        <Collapse in={filter}>
            <BoxFilter sx={sx}>
                <h3>{t("select_type_product")}</h3>
                {datatest?.map((val, idx) => {
                    return (
                        <div key={val.id}><p className={`${category == val.title && "active"}`} data-key={val.title} onClick={changeCategory}>{val.title}</p></div>
                    )
                })}

            </BoxFilter>
            <BoxFilter sx={sx}>
                <h3>{t("title_price_range")}</h3>
                <Box sx={{ display: 'flex', flexDirection: { sm: 'row', md: 'column' }, alignItems: 'center' }}>
                    <StyledFormControl fullWidth>
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            type="number"
                            fullWidth
                            placeholder={t("input_low_price")}
                            name="low_price"
                            inputProps={{
                                'data-key': 'low_price'
                            }}
                        // onChange={changeInput}
                        />
                    </StyledFormControl>
                    <Box sx={{ display: 'flex', m:2 }}>-</Box>
                    <StyledFormControl fullWidth >
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            type="number"
                            fullWidth
                            placeholder={t("input_high_price")}
                            name="high_price"
                            inputProps={{
                                'data-key': 'high_price'
                            }}
                        // onChange={changeInput}
                        />
                    </StyledFormControl>
                </Box>

            </BoxFilter>
        </Collapse >
    )
}


const StyledBtnIcon = styled(Button)(({ theme }) => ({
    display: 'flex',
    border: `2px solid ${theme.palette.primary.main}ad`,
    borderRadius: '9px',
    color: `${theme.palette.primary.main}`,
    minWidth: '39px',
    minHeight: '39px',
    background: '#fff',
    '& svg': {
        fontSize: '1.3rem',
        color: `${theme.palette.primary.main}`
    }
}));


const BoxFilter = styled(Box)(({ theme }) => ({
    // [theme.breakpoints.down('md')]: {
    //     backgroundColor: '#fff',
    // },
    [theme.breakpoints.up('md')]: {
        '& h3': {
            color: `${theme.palette.primary.main}`
        }
    },
    userSelect: 'none',
    padding: '15px',
    '& h3': {
        marginTop: '0px',
        marginBottom: theme.spacing(2)
    },
    '& p': {
        cursor: 'pointer',
        padding: ' 5px 15px',
        width: 'fit-content',
        borderRadius: '250px',
        marginLeft: '20px',
        marginBottom: '5px'
    },
    '& .active': {

        backgroundColor: `${theme.palette.primary.main}78`,

    }
}));


const StyledFormControl = styled(FormControl)(({ theme }) => ({

    '& .MuiOutlinedInput-root': {
        background: '#fff',
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main}`
        },
    },


}));