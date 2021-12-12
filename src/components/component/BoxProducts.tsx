import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from "react-i18next";
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { Box, Button, Collapse, Fade, FormControl, FormControlLabel, Grid, Grow, InputBase, MenuItem, Pagination, Rating, Select, SelectChangeEvent, Skeleton, Switch } from '@mui/material';
import { IoOptionsOutline } from 'react-icons/io5';

import { ButtonFilterProduct, BoxFilterProduct } from '@/components/subcomponent/FilterProduct'

import { loadProductsNot } from '@/store/actions';
interface propTypes {
    title: string,
    items?: {
        title: string,
        cost: string,
        image: string
    }[]
}

const BoxProducts = ({ title, items }: propTypes) => {
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const [word1, word2] = title.split("|");
    const { keyword, page = 1, sortBy, order = '', category = '' } = router.query;

    const [loadingItems, setLoadingItems] = useState(Array.from(Array(24)))

    useEffect(() => {
        setSortBy('')
        setPages(1);
    }, [category])

    const [filter, setFilter] = React.useState(false);

    const handleChangeFilter = () => {
        setFilter((prev) => !prev);
    };



    useEffect(() => {
        console.log(`items`, items)
    }, [])

    // =============== setSortBy ===================
    const [v_sortBy, setSortBy] = useState('');
    const handleChangeSortBy = async (event: SelectChangeEvent) => {
        dispatch(loadProductsNot());
        await setSortBy(event.target.value);
        setPages(1);
        if (event.target.value === 'sales') {
            await router.push({
                pathname: 'search',
                query: {
                    keyword: keyword,
                    page: 1,
                    sortBy: 'sales',

                }
            })
        } else if (event.target.value === '') {
            await router.push({
                pathname: 'search',
                query: {
                    keyword: keyword,
                    page: 1,
                }
            })
        } else {

            await router.push({
                pathname: 'search',
                query: {
                    ...router.query,
                    page: 1,
                    sortBy: 'price',
                    order: event.target.value
                }
            })
        }
    };



    // =============== setPages ===================
    const [pages, setPages] = useState(page ? parseInt(`${page}`) : 1);
    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPages(value);
        router.push({
            pathname: 'search', query: { ...router.query, keyword: keyword, page: value }
        })
    }

    useEffect(() => {
        console.log(`items`, items)
    }, [])


    useEffect(() => {
        console.log('router.query :>> ', router.query);
        if (sortBy !== '' && sortBy !== undefined) {
            console.log("hhh");
            if (sortBy === 'sales') {
                setSortBy(sortBy);
            } else {
                console.log('(order :>> ', order);
                console.log('(sortBy :>> ', sortBy);
                setSortBy(order === 'asc' ? 'asc' : 'page');
            }
        }

        // setDataFormUrl({ ...dataFormUrl, ["keyword"]: keyword || '' });
    }, [router.query])
    return (
        <>
            <StyledBox>
                <div className="heading">
                    <h3>{t("text_product")}</h3>
                    <div className="sort-by">
                        <ButtonFilterProduct
                            filter={filter}
                            setFilter={handleChangeFilter}
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            icon={<IoOptionsOutline />}
                        />

                        <FormControl sx={{ m: 1 }}>
                            <Select
                                defaultValue={v_sortBy}
                                value={v_sortBy}
                                onChange={handleChangeSortBy}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{ height: '40px' }}
                            >
                                <MenuItem value="">
                                    <em>ราคา</em>
                                </MenuItem>
                                <MenuItem value={"asc"}>ราคา: จากน้อยไปมาก</MenuItem>
                                <MenuItem value={"page"}>ราคา: จากมากไปน้อย</MenuItem>
                                <MenuItem value={"sales"}>สินค้าขายดี</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, height: (filter ? '100%' : '0px'), transition: 'height 0.25s ease' }}>
                        <BoxFilterProduct filter={filter} sx={{ pt: 0 }} />
                    </Box>
                </div>
                <div className="container">
                    {(items?.length === 0) ? (
                        <Grid container spacing={2}>
                            {loadingItems.map((value, index) =>
                                <Grid key={index} item xs={6} md={4}>
                                    <Box sx={{ width: '100%' }}>
                                        <Skeleton
                                            animation="wave"
                                            variant="rectangular"
                                            width={'100%'}

                                            sx={{ borderRadius: '20px', height: { xs: '140px', sm: '240px', md: '150px', lg: '180px' } }}
                                        />
                                    </Box>
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton animation="wave" />
                                        <Skeleton animation="wave" width="60%" />
                                    </Box>
                                </Grid>


                            )}
                        </Grid>
                    ) : (

                        <Grid container spacing={2} >
                            {items ? (
                                items?.map((val: any, index: any) => {
                                    return (
                                        <Grid key={index} item xs={6} md={4}>
                                            <Box
                                                component="div"
                                                sx={{
                                                    border: '1px solid #ECEDFE',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    transition: '0.4s',
                                                    '&:hover': {
                                                        background: '#ECEDFE'
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: { xs: '140px', sm: '240px', md: '150px', lg: '180px' },
                                                        borderRadius: '20px',
                                                        background: `url("${val.image}")`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center'
                                                    }}>

                                                </Box>
                                                <StyledBoxText>
                                                    <StyledTitleProduct className="o-text">
                                                        {val.title}
                                                    </StyledTitleProduct>
                                                    <StyledBoxTextBottom>
                                                        <StyledPriceProduct>
                                                            {val.price}
                                                        </StyledPriceProduct>
                                                        <StyledDataProduct>
                                                            ขายแล้ว 500 ชิ้น
                                                        </StyledDataProduct>
                                                        <StyledAddressProduct>
                                                            {val.address}
                                                        </StyledAddressProduct>
                                                    </StyledBoxTextBottom>
                                                </StyledBoxText>

                                            </Box>
                                        </Grid>


                                    )
                                })
                            ) : (
                                'not data'
                            )}

                        </Grid>
                    )}

                </div>
                {(items?.length === 0) ? (
                    <Box sx={{ mt: 4, mb: 3, display: 'flex' }} component="div">

                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                        <Skeleton sx={{ mr: 0.5 }} animation="wave" variant="circular" width={30} height={30} />
                    </Box>

                ) : (
                    <Box sx={{ mt: 4, mb: 3 }} component="div">
                        <Pagination
                            count={12}
                            defaultPage={1}
                            page={pages}
                            siblingCount={0}
                            variant="outlined"
                            color="primary"
                            onChange={handleChangePagination}
                        />
                    </Box>
                )}

            </StyledBox>
        </>
    )
}


export default BoxProducts



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
        marginBottom: '10px',
        '& h3': {
            color: `${theme.palette.primary.main}`
        },
        '& .sort-by': {
            display: 'flex',
            alignItems: 'center',
        }
    }
}));
const StyledBoxText = styled('div')(({ theme }) => ({
    padding: '10px 15px',

}));
const StyledTitleProduct = styled('p')(({ theme }) => ({
    fontSize: '0.9rem',
    marginBottom: '5px',
    height: '45px'
}));
const StyledPriceProduct = styled('p')(({ theme }) => ({
    fontSize: '0.8rem',
    color: '#fd3636',
    marginRight: '25px'
}));
const StyledAddressProduct = styled('p')(({ theme }) => ({
    fontSize: '0.6rem',
    color: '#a1a1a1',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'end'

}));
const StyledBoxTextTop = styled('div')(({ theme }) => ({

}));
const StyledBoxTextBottom = styled('div')(({ theme }) => ({
    overflow: 'hidden',
}));
const StyledDataProduct = styled('div')(({ theme }) => ({
    fontSize: ' 0.6rem',
    textAlign: 'end'
}));
const StyledBtnIcon = styled(Button)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}ad`,
    borderRadius: '9px',
    color: '#7a7a7a',
    minWidth: '39px',
    minHeight: '39px',
    background: '#fff',
    '& svg': {
        fontSize: '1.3rem',
        color: `${theme.palette.primary.main}`
    }
}));
// ================= BoxFilter ====================
const BoxFilter = styled(Box)(({ theme }) => ({
    // [theme.breakpoints.down('md')]: {
    //     backgroundColor: '#fff',
    // },
    // [theme.breakpoints.up('md')]: {
    //     backgroundColor: theme.palette.primary.main,
    // },

    padding: '15px',
    '& h3': {
        marginTop: '0px'
    },
    '& p': {
        cursor: 'pointer',
        padding: ' 5px 15px',
        width: 'fit-content',
        borderRadius: '250px',
        marginLeft: '20px'
    },
    '& .active': {

        backgroundColor: `${theme.palette.primary.main}78`,

    }
}));




// const BoxFilter = (props: any) => (
//     <Box
//         sx={{
//             bgcolor: `${props.theme.palette.primary.main`,
//             boxShadow: 1,
//             borderRadius: 1,
//             p: 2,
//             minWidth: 300,
//         }}
//     >{props.children}</Box>
// );