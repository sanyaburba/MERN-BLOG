import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Navigate, Routes, Route,} from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NewAppBar from "./components/NewStyles/NewAppBar/NewAppBar";
import PhotoBox from "./components/NewStyles/PhotoBox/PhotoBox";
import NewPosts from "./components/NewStyles/NewPosts/NewPosts";
import NewPagination from "./components/NewStyles/NewPagination/NewPagination";
import RedirectAuth from "./components/Auth/RedirectAuth";

const App = () => {
    return (
        <BrowserRouter>
            <NewAppBar/>
            <PhotoBox/>
            <NewPosts/>
            <NewPagination/>
            <Container maxWidth="xl">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Navigate to="/posts"/>}/>
                    {/*  TODO*/}
                    <Route path="/posts" exact element={<Home/>}/>
                    <Route path="/posts/search" exact element={<Home/>}/>
                    <Route path="/posts/:id" exact element={<PostDetails/>}/>
                    <Route path="/auth" exact element={<RedirectAuth/>}/>
                    {/*    TODO */}
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;