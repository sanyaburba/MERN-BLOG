import {createReducer} from "@reduxjs/toolkit";

import {AUTH, LOGOUT, MY_ERROR, MY_ERROR_CLEAR} from "../../constants/actionTypes";

const authReducer = createReducer({authData: null}, {
    [AUTH]: (state, action) => {
        localStorage.setItem('profile', JSON.stringify({...action?.data}));
        state.authData = action?.data;
        state.loading = false;
        state.errors = null;
    },
    [LOGOUT]: (state) => {
        localStorage.clear();
        state.authData = null;
        state.loading = false;
        state.errors = null;
    },
    [MY_ERROR]: (state, action) => {
        state.error = action?.payload;
    },
    [MY_ERROR_CLEAR]: (state, _) => {
        state.error = null;
    }
});


export default authReducer;