import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Skeleton } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategory } from '@/store/actions'

const StyledBox = styled(Box)(({ theme }) => ({
    userSelect: 'none',
    width: ' 85%',
    backgroundColor: ' #FFFFFF',
    boxShadow: '2px 2px 30px rgba(167, 158, 245, 0.2)',
    margin: '30px auto',
    flexDirection: 'column',
    alignItems: 'start',
    padding: ' 40px 20px',
    marginTop: '0px',
    position: 'relative',
    backgroundImage: `url(${"/bg.png"})`,
    backgroundSize: '1000px',
    backgroundPosition: 'center',
    borderRadius: '10px',
    ['@media (max-width: 899px)']: {
        marginTop: '-60px',
    },
    '& .slick-slide, .slick-slide *': {
        outline: 'none',

        '& div': {
            display: 'flex',
        }
    },
    '& .slick-slider.slick-initialized': {
        position: 'relative',
        '& .slick-list': {
            '& .slick-track': {
                padding: '5px 0px',
            }
        },
        '& .slick-arrow.slick-prev': {
            position: 'absolute',
            left: '-45px',
        },
        '& .slick-prev:before': {
            content: '"←"',
            color: ' #525252',
            fontSize: '2.5rem',

        },
        '& .slick-arrow.slick-next': {
            position: 'absolute',
            right: -20,

        },
        '& .slick-next:before': {
            content: '"→"',
            color: ' #525252',
            fontSize: '2.5rem',

        }
    }
}));
const StyledBoxTitle = styled('div')(({ theme }) => ({

    textShadow: '2px 2px 10px rgba(0,0,0,0.05)',
    '& h3': {
        margin: '20px',
        fontWeight: 700,
        letterSpacing: '2px',
        textAlign: 'start',
        fontSize: '2rem',
        color: '#323543',
    },
    '& b': {
        color: `${theme.palette.primary.main}`
    },
}));
const StyledBoxItem = styled('div')(({ theme }) => ({
    width: '100% ',
    // height: '170px',
    textAlign: 'center',
    padding: '20px',
    display: 'flex !important',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
        borderRadius: '10px',
        boxShadow: `0px 2px 14px -9px ${theme.palette.primary.main}`,
        backgroundColor: '#FFFFFF',
        ['@media (max-width: 666px)']: {
            margin: 'auto'
        }
    },
    '& .img': {
        width: '90px',
        height: '90px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    '& p': {
        width: '100% ',
        color: '#4d4d4d70',
        fontSize: '0.9rem',
        letterSpacing: '0.5',
        textAlign: 'center',
        height: '40px',
        overflow: 'hidden',
    },
}));


interface PropTypes {
    title: string,
    items?: [{
        image: string,
        title: string,
        to: string
    }]
}

const BoxSlickProductธype = ({ title, items }: PropTypes) => {
    const counter = useSelector((state: any) => state.reducer)
    const dispatch = useDispatch()
    const router = useRouter();
    const [word1, word2] = title.split("|");
    const [width, setWidth] = useState(0);
    const [item, setItem] = useState(Array.from(Array(12)));

    useEffect(() => {
        dispatch(loadCategory())
    }, [])

    const settings = {
        docs: true,
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 6,
        speed: 500,
        rows: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    useEffect(() => {
        if (items != undefined) {
            setItem(items)
        }
        console.log(items);

    }, [])

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));

    }, [])

    return (
        <>
            <StyledBox>
                <StyledBoxTitle>
                    <h3>{word1}<b>{word2 && word2}</b></h3>
                </StyledBoxTitle>
                <Slider {...settings}>
                    {(counter.categorys.length > 0) && (counter.categorys.map((element: any, index: any) => {
                        return (
                            <StyledBoxItem key={index} onClick={() => router.push(`${element.to}`)}>
                                {/* <img alt="image item" src={`${element.imgae}`} /> */}
                                <Box component="div" className="img" sx={{ background: `url("${element.image}")` }}></Box>
                                <p>{element.title}</p>
                            </StyledBoxItem>
                        )
                    }))}
                </Slider>
                <Slider {...settings}>
                    {counter.categorys.length == 0 && (item.map((element, index): any => {
                        return (
                            <StyledBoxItem key={index} >
                                <Skeleton variant="rectangular" width="100%" height={80} />
                                <p><Skeleton variant="text" /></p>
                            </StyledBoxItem>
                        )
                    }))}
                </Slider>




            </StyledBox>
        </>
    )
}



export default BoxSlickProductธype
