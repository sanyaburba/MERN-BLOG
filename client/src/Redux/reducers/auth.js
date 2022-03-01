import {AUTH, LOGOUT} from "../../constants/actionTypes";
import { createReducer} from "@reduxjs/toolkit";

const authReducer = createReducer({authData:null}, {
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
    }
});


export default authReducer;