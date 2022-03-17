import React from 'react';
import AdminPage from "./AdminPage";
import Home from "../Home/Home";

const RedirectAdminPage = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const admin = user?.result.role === 'ADMIN';

    return (
        admin ? <AdminPage /> : <Home/>
    );
};

export default RedirectAdminPage;
