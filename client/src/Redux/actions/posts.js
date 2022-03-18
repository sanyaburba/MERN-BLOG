import * as api from '../../api';
import {
    COMMENT,
    CREATE,
    DELETE,
    END_LOADING,
    FETCH_ALL, FETCH_ALL_POSTS_ADMIN,
    FETCH_BY_SEARCH, FETCH_POST,
    START_LOADING,
    UPDATE
} from "../../constants/actionTypes";

//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (e) {
        return new Error(e.message);
    }
};

export const fetchAllPostsForAdmin = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchAllPostsForAdmin();
        dispatch({type: FETCH_ALL_POSTS_ADMIN, payload: data});
        dispatch({type: END_LOADING});
    } catch (e) {
        return new Error(e.message);
    }
};

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPost(id);
        dispatch({type: FETCH_POST, payload: data});
        dispatch({type: END_LOADING});
    } catch (e) {
        return new Error(e.message);
    }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: {data}});
        dispatch({type: END_LOADING});
    } catch (e) {
        return new Error(e.message);
    }
};

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.createPost(post);
        navigate(`/posts/${data._id}`);
        dispatch({type: CREATE, payload: data});
    } catch (e) {
        return new Error(e.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch (e) {
        return new Error(e.message);
    }
};


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    } catch (e) {
        return new Error(e.message);
    }
};

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const {data} = await api.likePost(id, user?.token);
        dispatch({type: UPDATE, payload: data});
    } catch (e) {
        return new Error(e.message);
    }
};

export const commentPost = (value, id) => async (dispatch) => {
    try {

        const {data} = await api.comment(value, id);

        dispatch({type: COMMENT, payload: data});


        return data.comments;
    } catch (e) {
        return new Error(e.message);
    }
};
