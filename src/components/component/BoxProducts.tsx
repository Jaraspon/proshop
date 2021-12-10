import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from "react-i18next";
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { FormControl, InputBase, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';

const StyledBox = styled('div')(({ theme }) => ({
    width: ' 85%',
    backgroundColor: ' #FFFFFF',
    boxShadow: `2px 0px 20px 0px ${theme.palette.primary.main}2b`,
    margin: '30px auto',
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
    }
}));


interface propTypes {
    title: string,
    itmes?: []
}

const Name = ({ title, itmes }: propTypes) => {
    const router = useRouter();
    const counter = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const [word1, word2] = title.split("|");
    const { keyword, page = 1, sortBy, order = '' } = router.query;



    // =============== setSortBy ===================
    const [v_sortBy, setSortBy] = useState('');
    const handleChangeSortBy = async (event: SelectChangeEvent) => {
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
        console.log('router.query :>> ', router.query);
        if (sortBy !== '' && sortBy !== undefined) {
            console.log("hhh");
            if (sortBy === 'sales') {
                setSortBy(sortBy);
            } else {
                console.log('(order :>> ', order);
                console.log('(sortBy :>> ', sortBy);
                setSortBy(order === 'asc' ? 'asc':'page');
            }
        }
       
        // setDataFormUrl({ ...dataFormUrl, ["keyword"]: keyword || '' });
    }, [router.query])
    return (
        <>
            <StyledBox>
                <div className="heading">
                    <h3>{word1}<b>{word2}</b></h3>
                    <div className="sort-by">
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
                {/* <div className="container">
                    {items.map((element, index) => {
                        if (pages === index + 1) {
                            return element.map((element1, index1) => {
                                return (
                                    <div className="box" key={index1}>
                                        <img alt="1" src={element1.image} />
                                        <p>{element1.title}</p>
                                        <a className="price" href="#">$23.3</a>
                                        <a className="buy-btn" href="#">Add To Cart</a>
                                    </div>
                                )

                            })
                        }
                    })}
                </div> */}
                <Pagination
                    count={12}
                    defaultPage={1}
                    page={pages}
                    siblingCount={0}
                    variant="outlined"
                    color="primary"
                    onChange={handleChangePagination}
                />
            </StyledBox>
        </>
    )
}


export default Name
