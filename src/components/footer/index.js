import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import theme from '../../customThemes/themes';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Container maxWidth="lg"
                    component="footer"
                    sx={{
                        display: 'flex',
                        textAlign: 'left',
                        paddingY: 1,
                        fontSize: 12,
                        alignItems: 'center',
                        justifyContent: 'space-between',

                    }}
                >
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        © 2023, Vacanza Stays, Inc.

                        <ul style={{ listStyleType: 'disc', marginLeft: 10, padding: 0, display: 'flex', alignItems: 'center' }}>
                            <li style={{ marginRight: 20 }}>Privacy</li>
                            <li style={{ marginRight: 20 }}>Terms</li>
                            <li style={{ marginRight: 20 }}>Sitemap</li>
                            <li style={{ marginRight: 20 }}>Company Details</li>
                            <li>Destinations</li>
                        </ul>

                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <LanguageIcon sx={{ fontSize: '14px' }} />
                        English (US)   Support and Resources
                    </Box>
                </Container>
            </AppBar>
        </ThemeProvider >
    );
};

export default Footer;
