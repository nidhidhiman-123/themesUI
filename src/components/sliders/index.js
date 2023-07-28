import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../customThemes/themes';
import IconButton from '@mui/material/IconButton';


const imagesWithTitles = [
    { src: 'Group432.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },
    { src: 'Group433.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 200.00 per night' },
    { src: 'Group434.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },
    { src: 'Group435.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },

];
const imagesWithTitles1 = [
    { src: 'Group432.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },
    { src: 'Group433.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 200.00 per night' },
    { src: 'Group434.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },
    { src: 'Group435.png', title: 'DORADO VIDA ESTATE', location: 'India Wells, CA', price: '$ 180.00 per night' },

];

function Sliders() {
    return (

        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="lg" style={{ marginTop: '50px' }} >
                    <Toolbar disableGutters style={{ gap: "30px" }}>
                        {imagesWithTitles.map((card, index) => (
                            <Card key={index} sx={{ maxWidth: 300, boxShadow: 'none' }} className='card-section'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="280"
                                        src={card.src}
                                        alt={card.title}
                                        style={{ borderRadius: '18px' }}
                                    />
                                    <IconButton
                                        sx={{
                                            position: 'absolute', top: 5, right: 5, color: 'white'

                                        }}
                                    >
                                        <img
                                            src="/heart.png"
                                            alt="logo"
                                            width={25}
                                            height={25}
                                            style={{ objectFit: 'contain' }}
                                        />

                                    </IconButton>
                                    <CardContent sx={{ paddingLeft: 0 }}>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.colors.color.title.main }}>
                                            {card.title}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: theme.colors.color.textSecondary.main }}>
                                            {card.location}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.colors.color.priceText.main }}>
                                            {card.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Toolbar>
                    <Toolbar disableGutters style={{ gap: "30px" }}>
                        {imagesWithTitles1.map((card, index) => (
                            <Card key={index} sx={{ maxWidth: 300, boxShadow: 'none' }} className='card-section'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="280"
                                        src={card.src}
                                        alt={card.title}
                                        style={{ borderRadius: '18px' }}
                                    />
                                    <IconButton
                                        sx={{
                                            position: 'absolute', top: 5, right: 5, color: 'white'

                                        }}
                                    >
                                        <img
                                            src="/heart.png"
                                            alt="logo"
                                            width={25}
                                            height={25}
                                            style={{ objectFit: 'contain' }}
                                        />

                                    </IconButton>
                                    <CardContent sx={{ paddingLeft: 0 }}>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.colors.color.title.main }}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.colors.color.textSecondary.main }}>
                                            {card.location}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.colors.color.priceText.main }}>
                                            {card.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider >
    );
}

export default Sliders;