import * as React from 'react';
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import decode from "jwt-decode";
import useStyles from "./styles";
import {
    AppBar, Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@material-ui/core";
import {LOGOUT} from "../../constants/actionTypes";
import SearchInput from "../SearchInput/SearchInput";


const ResponsiveAppBar = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const admin = user?.result.role === 'ADMIN';
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = useCallback(() => {
        dispatch({type: LOGOUT});
        navigate('/');
        setUser(null);
    }, [dispatch, navigate]);

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [user?.token, location, logout]);

    const handleOpenUserMenu = useCallback((event) => setAnchorElUser(event.currentTarget), []);
    const handleCloseUserMenu = useCallback(() => setAnchorElUser(null), []);
    const adminPanelNavigate = useCallback(() => navigate('/admin'),[navigate] );


    return (
        <AppBar
            position="sticky"
            className={classes.appBar}
            color='inherit'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link
                        to="/"
                        className={classes.logoLink}>
                        {/*<img*/}
                        {/*    src={logo}*/}
                        {/*    alt="Awesome blog"*/}
                        {/*    height="80"/>*/}
                        <span className={classes.logoText}>{admin ? 'secretadmin:!' : 'secretspeaker:!'}</span>
                    </Link>
                    <SearchInput/>
                    {user ? (
                        <Box className={classes.userMenu}>
                            <Typography
                                variant="h6"
                                style={{color: '#000'}}>
                                {user.result.name}
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{p: 0}}>
                                    <Avatar
                                        alt={user.result.name}
                                        src={user.result.imageUrl}>
                                        {user.result.name.charAt(0)}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
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
                                onClose={handleCloseUserMenu}>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography onClick={logout}>LOG OUT</Typography>
                                </MenuItem>
                                {admin &&<MenuItem onClick={handleCloseUserMenu}>
                                     <Typography onClick={adminPanelNavigate}>ADMIN PANEL</Typography>
                                </MenuItem>}
                            </Menu>
                        </Box>
                    ) : (
                        <Box className={classes.userMenu}>
                            <Button
                                component={Link}
                                to="/auth">
                                SIGN IN
                            </Button>

                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;


