import {createReducer} from "@reduxjs/toolkit";
import {FETCH_USERS_FOR_ADMIN} from "../../constants/actionTypes";

export const usersReducer = createReducer({}, {
    [FETCH_USERS_FOR_ADMIN] : (state, action) => {
        state.users = action.payload;
    }
});