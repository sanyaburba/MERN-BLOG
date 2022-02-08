import {CREATE, DELETE, FETCH_ALL, UPDATE} from "../../constants/actionTypes";
import {createReducer} from "@reduxjs/toolkit";

export const postsReducer = createReducer([], {
    [FETCH_ALL]: (state, action) => action.payload,
    [CREATE]: (state, action) => [...state, action.payload],
    [DELETE]: (state, action) => state.filter((post) => post._id !== action.payload),
    [UPDATE]: (state, action) => state.map((post) => post._id === action.payload._id ? action.payload : post)
});


//! GIT repository
//TODO fix choose file(choose only png)
//TODO Required fields ( border another color)
//TODO loginization, admin and users
//TODO color scheme ( not required)
