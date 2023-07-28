import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../customThemes/themes'

const SubHeader = () => {

    const imagesWithTitles = [
        { src: '/apartment.png', title: 'Apartment' },
        { src: '/house.png', title: 'House' },
        { src: '/condominium.png', title: 'Condominium' },
        { src: '/cabin.png', title: 'Cabin' },
        { src: '/villa.png', title: 'Villa' },
        { src: '/townhouse.png', title: 'Townhouse' },
        { src: '/cottage.png', title: 'Cottage' },
        { src: '/beachfront.png', title: 'Beachfront' },
        { src: '/lakefront.png', title: 'Lakefront' },
        { src: '/weddingvenue.png', title: 'Wedding Venue' },
        { src: '/ski.png', title: 'Skiing' },
    ];
    const buttonStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mr: 2,
        color: '#939393',
        textDecoration: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        borderRadius: '20px',
        border: '1px solid #BDBDBD',
        padding: '7px 20px',
        marginRight: '0'

    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters >
                        <Grid container spacing={5} justifyContent="space-between" style={{ marginTop: '-10px', marginBottom: '20px' }} >
                            {imagesWithTitles.map((item, index) => (
                                <Grid item key={index} style={{ paddingLeft: "35px" }}>
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={item.src}
                                            alt=""
                                            width={40}
                                            height={40}
                                            style={{ objectFit: 'cover', marginBottom: '8px' }}
                                        />
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: theme.colors.color.title.main, fontSize: '14px' }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}

                            <Grid item>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={buttonStyles}

                                >
                                    <TuneIcon style={{ marginRight: '4px', color: '#939393' }} /> Filters
                                </Typography>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider>
    )
}
export default SubHeader