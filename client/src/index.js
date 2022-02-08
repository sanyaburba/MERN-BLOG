import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import './index.scss';
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Redux/reducers/auth";
import {postsReducer} from "./Redux/reducers/posts";


const store = configureStore({
    reducer: {
        posts:postsReducer,
        auth:authReducer
    }
});
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
