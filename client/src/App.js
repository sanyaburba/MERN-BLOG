import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import RedirectAuth from "./components/Auth/RedirectAuth";
import Home from "./components/Home/Home";
import RedirectMessenger from "./components/Messenger/RedirectMessenger";
import RedirectAdminPage from "./components/AdminPage/RedirectAdminPage";
import AppBar from "./components/AppBar/AppBar";


const App = () => {

    return (
        <BrowserRouter>
            <AppBar />
            <Routes>
                <Route path="/" element={<Navigate to="/posts"/>}/>
                <Route path="/posts" element={<Home/>}/>
                <Route path="/posts/search" element={<Home/>}/>
                <Route path="/posts/:id" element={<PostDetails/>}/>
                <Route path="/auth" element={<RedirectAuth/>}/>
                <Route path="/messenger" element={<RedirectMessenger/>}/>
                <Route path="/admin" element={<RedirectAdminPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;