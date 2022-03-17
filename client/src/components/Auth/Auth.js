import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import GoogleLogin from "react-google-login";
import {Avatar, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {LockOutlined} from "@material-ui/icons";
import {Google} from "@mui/icons-material";

import useStyles from './styles';
import Input from "./Input";
import {login, registration} from "../../Redux/actions/auth";
import {AUTH} from "../../constants/actionTypes";
import PasswordInput from "./PasswordInput";


const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isError = useSelector((state) =>state.auth.error);
    // console.log(isError);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (isAuth) {
            dispatch(registration(formData, navigate));
        } else {
            dispatch(login(formData, navigate));
        }
    }, [dispatch, isAuth, navigate, formData]);

    const handleChange = useCallback((e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }, [formData]);

    const switchMode = useCallback(() => setIsAuth((prevIsAuth) => !prevIsAuth), []);

    const googleSuccess = useCallback(async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type: AUTH, data: {result, token}});
            navigate('/');
        } catch (e) {
            return new Error(e.message);
        }
    }, [dispatch, navigate]);


    const googleFailure = useCallback((e) => {
        return new Error(e.message);
    }, []);

    const renderButton = useCallback((renderProps) => {
        return <Button
            className={classes.googleButton}
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<Google/>}
            variant="contained">
            Sign in via Google
        </Button>;
    }, [classes.googleButton]);

    return (<Container
        component="main"
        maxWidth="xs">
        <Paper
            className={classes.paper}
            elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlined/>
            </Avatar>
            <Typography variant="h5">
                {isAuth ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form
                className={classes.form}
                onSubmit={onSubmit}>
                <Grid
                    container
                    spacing={2}>
                    {isAuth && (<>
                        <Input
                            name="firstName"
                            label="First Name"
                            handleChange={handleChange}
                            autoFocus
                            isError={isError}
                            half/>
                        <Input
                            name="lastName"
                            label="Last Name"
                            isError={isError}
                            handleChange={handleChange}
                            half/>
                    </>)}
                    <Input
                        name="email"
                        label="Email"
                        isError={isError}
                        handleChange={handleChange}
                        type="email"/>
                    <PasswordInput
                        name="password"
                        label="Password"
                        handleChange={handleChange}/>
                    {isAuth && <PasswordInput
                        name="confirmPassword"
                        label="Repeat password"
                        handleChange={handleChange}/>}
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant='contained'
                    className={classes.submit}>
                    {isAuth ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin
                    clientId="893571297843-ejs2ka06e13f9t3t7nojs6l53i7rfla6.apps.googleusercontent.com"
                    render={renderButton}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"/>
                <Grid
                    container
                    justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isAuth ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>);
};

export default Auth;
