import React from 'react';
import Auth from "./Auth";
import {Navigate} from "react-router-dom";

const RedirectAuth = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        !user ? <Auth/> : <Navigate to="/posts"/>
    );
};

export default RedirectAuth;
