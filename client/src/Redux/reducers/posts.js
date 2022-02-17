import {
    CREATE,
    DELETE,
    END_LOADING,
    FETCH_ALL,
    FETCH_BY_SEARCH, FETCH_POST,
    START_LOADING,
    UPDATE
} from "../../constants/actionTypes";
import {createReducer} from "@reduxjs/toolkit";

export const postsReducer = createReducer({}, {
    [START_LOADING]: (state, _) => {
        state.isLoading = true;
    },
    [END_LOADING]: (state, _) => {
        state.isLoading = false;
    },
    [FETCH_ALL]: (state, action) => {
        state.posts = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.numberOfPages = action.payload.numberOfPages;
    },
    [FETCH_BY_SEARCH]: (state, action) => {
        state.posts = action.payload.data;
    },
    [FETCH_POST]: (state, action) => {
        state.post = action.payload;
    },
    [CREATE]: (state, action) => {
        state.posts = [...state, action.payload];
    },
    [UPDATE]: (state, action) => {
        state.posts = state.posts.map((post) => post._id === action.payload._id ? action.payload : post);
    },
    [DELETE]: (state, action) => {
       state.posts = state.posts.filter((post) => post._id !== action.payload);
    }
});


//! GIT repository
//TODO fix choose file(choose only png)
//TODO Required fields ( border another color)
//TODO loginization, admin and users
//TODO color scheme ( not required)
