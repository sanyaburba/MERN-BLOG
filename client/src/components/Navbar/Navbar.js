import React, {useCallback, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import decode from 'jwt-decode';
import titleImage from "../../images/titleImage.svg";
import useStyles from './styles';
import {LOGOUT} from "../../constants/actionTypes";


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
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


    return (
        <AppBar
            className={classes.appBar}
            position="static"
            color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link} to='/'
                    className={classes.heading}
                    variant="h2"
                    align="center">
                    MERN blog
                </Typography>
                <img
                    className={classes.image}
                    src={titleImage}
                    alt="Awesome blog"
                    height="70"
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography
                            className={classes.userName}
                            variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary">
                        Sign in
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
