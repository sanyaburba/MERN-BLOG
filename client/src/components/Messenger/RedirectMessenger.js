import React from 'react';
import Auth from "../Auth/Auth";
import NewMessenger from "./NewMessenger";

const RedirectMessenger = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        !user ? <Auth/> : <NewMessenger/>
    );
};

export default RedirectMessenger;
