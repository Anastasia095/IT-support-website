import * as React from 'react';
import {
    AppBar,
    Drawer,
    Box,
    Toolbar,
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import CustomizedTables from '../components/Table';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState, useEffect  } from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { customTheme } from "../themes/index.ts";

export default function Profile() {

    async function getTickets() {
        const response = await fetch('http://127.0.0.1:3001/api/profile', {
            credentials: "include",
            method: 'GET'
        });

        var data = await response.json();
        setTickets(data);

        return response;
    };


    const [tickets, setTickets] = useState('');
    useEffect(() => {
        getTickets();
   }, []);

    console.log(tickets);
    console.log(tickets[tickets.length - 1]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(171,171,171,0.18)',
        '&:hover': {
            backgroundColor: 'rgba(171,171,171,0.30)',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '20%',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    //drawer state
    const [open, setOpen] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    return (
        //bad sticky footer fix
        <Box sx={{ flexGrow: 1, minHeight: '600px' }}>
            <MuiThemeProvider theme={customTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor='left'
                            open={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}
                        >
                            <Box p={2} width='250px' textAlign='center' role='presentation'>
                                <Typography variant='h6' component='div'>
                                    Menu
                                </Typography>
                                <List>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText>
                                            <Link href="about" color="inherit" underline="none">About</Link>
                                        </ListItemText>
                                    </ListItemButton>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText>
                                            <Link href="login" color="inherit" underline="none">Login/SignUp</Link>
                                        </ListItemText>
                                    </ListItemButton>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText>
                                            <Link href="#" color="inherit" underline="none">Placeholder</Link>
                                        </ListItemText>
                                    </ListItemButton>
                                </List>
                            </Box>
                        </Drawer>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Welcome Back { tickets.length === 0 ? " " : tickets[tickets.length - 1].user_name }!
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Search sx={{ width: '10%', mt: 1 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase sx={{ pl: 6 }}
                        placeholder="Find Tickets..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ pl: 2, pt: 2 }}>
                    <Checkbox {...label} defaultChecked /> Open
                    <Checkbox {...label} defaultChecked /> On Hold
                    <Checkbox {...label} defaultChecked /> In Progress
                    <Checkbox {...label} defaultChecked /> Closed
                </Box>
                {renderMobileMenu}
                {renderMenu}
                <CustomizedTables ticket={ tickets }/>
            </MuiThemeProvider>
        </Box>

    );
}