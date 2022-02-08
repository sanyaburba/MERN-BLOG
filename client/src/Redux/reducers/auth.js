import {AUTH, LOGOUT} from "../../constants/actionTypes";
import { createReducer} from "@reduxjs/toolkit";

// export const getAuthentication = createAction('AUTH');
// export const getLogout = createAction('LOGOUT');

// const authReducer = (state = {authData: null}, action) => {
//     switch (action.type) {
//         case AUTH:
//             localStorage.setItem('profile', JSON.stringify({...action?.data}));
//             return {...state, authData: action?.data, loading: false, errors: null};
//         case LOGOUT:
//             localStorage.clear();
//             return {...state, authData: null,loading: false, errors: null};
//         default:
//             return state;
//     }
// };

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