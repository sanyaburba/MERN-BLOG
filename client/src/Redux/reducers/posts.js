import {CREATE, DELETE, FETCH_ALL, UPDATE} from "../../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
};

//! GIT repository
//TODO fix choose file(choose only png)
//TODO Required fields ( border another color)
//TODO Remove clear button
//TODO loginization, admin and users
//TODO color scheme ( not required)
