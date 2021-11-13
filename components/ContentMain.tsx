import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';

const dataPet = [
    { id: 1, img: "/assets/images/dog.png", text: "สุนัข" },
    { id: 2, img: "/assets/images/cat.png", text: "แมว", },
    { id: 3, img: "/assets/images/dog1.png", text: "สุนัขพันธุ์เล็ก" },
    { id: 4, img: "/assets/images/dog2.png", text: "สุนัขพันธุ์กลาง" },
    { id: 5, img: "/assets/images/dog3.png", text: "สุนัขพันธุ์ใหญ่" },
    { id: 6, img: "/assets/images/dog4.png", text: "ลูกสุนัข" }
]

const useStyles = makeStyles((theme: any) => ({
    root: {
        '& .boxImg': {
            position: 'relative',
            '& .text': {
                width: '100%',
                position: 'absolute',
                bottom: 0,
                textAlign: 'center',
                textShadow: '-1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff',
                fontSize: '1.1rem',
                ['@media (min-width: 900px)']: {
                    fontSize: '2rem'
                },
            }
        }
    },

}));



const ContentMain = (props: any) => {
    const classes = useStyles();

    const clickPet = (key: any) => {
        console.log(key);

    }
    return (
        <>
            <Container fixed  className={classes.root}>
                <Typography variant="h5" gutterBottom component="div" sx={{ pb: 1 }}>
                    เลือกรับอุปการะ
                </Typography>

                <Grid container spacing={2}>
                    {dataPet.map((val, index) => {
                        return (
                            <Grid item xs={index <= 1 ? 6 : index <= 4 ? 4 : 12} key={index}>
                                <Card variant="outlined" sx={{ borderRadius: 2 }} className="boxImg cursor-pointer" onClick={() => { clickPet(val.id) }}>
                                    <CardMedia
                                        sx={{
                                            height: { xs: "200px", md: index <= 1 ? "350px" : index <= 4 ? "320px" : "300px", lg: index <= 1 ? "450px" : index <= 4 ? "420px" : "400px" },

                                        }}
                                        component="img"
                                        alt="green iguana"
                                        image={val.img}
                                    />
                                    <Typography variant="h5" gutterBottom component="div" className="text">
                                        {val.text}
                                    </Typography>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
                {/* <Grid item xs={6}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardMedia
                            sx={{ height: { xs: "200px", md: "350px", lg: "450px" } }}
                            component="img"
                            alt="green iguana"

                            image="/assets/images/cat.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>

                        <CardMedia

                            sx={{ height: { xs: "200px", md: "320px", lg: "420px" } }}
                            component="img"
                            alt="green iguana"
                            image="/assets/images/dog1.png"
                        />

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardMedia
                            sx={{ height: { xs: "200px", md: "320px", lg: "420px" } }}
                            component="img"
                            alt="green iguana"
                            image="/assets/images/dog2.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardMedia
                            sx={{ height: { xs: "200px", md: "320px", lg: "420px" } }}
                            component="img"
                            alt="green iguana"
                            image="/assets/images/dog3.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardMedia
                            sx={{ height: { xs: "200px", md: "300px", lg: "400px" } }}
                            component="img"
                            alt="green iguana"
                            image="/assets/images/dog4.png"
                        />
                    </Card>
                </Grid> */}
            </Container>
        </>
    )
}

ContentMain.propTypes = {

}

export default ContentMain
