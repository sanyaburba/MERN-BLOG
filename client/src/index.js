import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import './index.scss';
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Redux/reducers/auth";
import {postsReducer} from "./Redux/reducers/posts";
import {ThemeProvider } from '@mui/material/styles';
import theme from "./theme";


const store = configureStore({
    reducer: {
        posts:postsReducer,
        auth:authReducer
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>

    </Provider>,
    document.getElementById('root')
);
