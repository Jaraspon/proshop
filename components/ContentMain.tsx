import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, Container, Grid } from '@mui/material'
import { Box, ThemeProvider, createTheme } from '@mui/system';
const ContentMain = (props: any) => {
    return (
        <>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined" sx={{ xs: { height: '350px' }, md: { height: '350px' } }}>
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    p: 2,
                                    minHeight: 250,
                                }}
                            >
                                <CardMedia

                                    component="img"
                                    alt="green iguana"
                                    height="100%"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

ContentMain.propTypes = {

}

export default ContentMain
