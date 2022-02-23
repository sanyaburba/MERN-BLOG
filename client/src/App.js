import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import RedirectAuth from "./components/Auth/RedirectAuth";
import NewHome from "./components/NewStyles/NewHome/NewHome";
import theme from "./theme";
import {ThemeProvider} from "@mui/material/styles";


const App = () => {


    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Navigate to="/posts"/>}/>
                    <Route path="/posts" element={<NewHome/>}/>
                    <Route path="/posts/search" element={<NewHome/>}/>
                    <Route path="/posts/:id" element={<PostDetails/>}/>
                    <Route path="/auth" element={<RedirectAuth/>}/>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;