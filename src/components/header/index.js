import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../customThemes/themes';
import Divider from '@mui/material/Divider';

const pages = ['Anywhere', 'Any week', 'Add guests'];
const settings = ['Sign Up', 'Login', 'Favorites', 'Rewards', 'Past Booking ', 'Mobile App'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Container maxWidth="lg" style={{ marginBottom: '10px' }}>
                    <Toolbar disableGutters>
                        <Typography className='logo'
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                color: 'black',
                                textDecoration: 'none',
                                padding: '0px'
                            }}
                        >

                            <img
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={90}
                                style={{ objectFit: 'cover' }}
                            />

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Box >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={90}
                                style={{ objectFit: 'cover' }}
                            />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { xs: "center" }, }}>
                            <Box className='header_menus' style={{ alignItems: 'center' }}>
                                {pages.map((page, index) => (
                                    <Button style={{ margin: "0" }}
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            color: theme.colors.color.title.main, my: 2, textTransform: 'none',
                                            padding: '6px 15px'
                                        }}
                                    >
                                        {page}
                                        {index !== pages.length - 1 && (
                                            <span
                                                style={{
                                                    content: '""',
                                                    position: 'absolute',
                                                    height: '80%',
                                                    right: 0,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    borderRight: '1px solid #ccc',
                                                }}
                                            />
                                        )}
                                    </Button>

                                ))}
                                <SearchIcon sx={{
                                    mr: 1,
                                    display: 'flex',
                                    color: 'white',
                                    backgroundColor: '#EF782B',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    padding: '7px',

                                }} />
                            </Box>

                        </Box>

                        <Box className="header_dropdown" sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <MenuIcon style={{ marginRight: '9px' }} />
                                    <Avatar sx={{ height: '25px', width: '25px' }} alt="" src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{
                                    mt: '45px', '& .MuiPaper-root': {
                                        borderRadius: '30px',
                                        paddingBottom: '5px',
                                        paddingTop: '10px',
                                    },
                                }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Box style={{ padding: "0px 20px" }}>
                                    {settings.map((setting, index) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}
                                            sx={{
                                                fontSize: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                borderBottom: index === 1 ? '1px solid #ccc' : 'none',
                                                marginBottom: index === 1 ? '8px' : '0',
                                                width: '190px',
                                                height: '30px',
                                                '&:hover': {
                                                    backgroundColor: '#f0f0f0',
                                                },
                                                padding: "0",
                                                paddingBottom: '10px',

                                            }}
                                        >
                                            <Typography textAlign="center">{setting}</Typography>

                                        </MenuItem>
                                    ))}
                                </Box>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider >
    );
}
export default Header;