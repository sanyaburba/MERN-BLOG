import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';

import App from './App.js';
import './index.scss';
import authReducer from "./Redux/reducers/auth";
import {postsReducer} from "./Redux/reducers/posts";
import {usersReducer} from "./Redux/reducers/users";


const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        user: usersReducer
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
