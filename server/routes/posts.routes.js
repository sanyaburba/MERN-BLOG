import express from "express";
import {
    getPosts,
    getPostsBySearch,
    createPost,
    deletePost,
    updatePost,
    likePost,
    getPost,
    commentPost
} from "../controllers/posts.controller.js";
import auth from "../middleware/auth.middleware.js";

const postsRouter = express.Router();

postsRouter.get('/search', getPostsBySearch);
postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPost);
postsRouter.post('/', auth, createPost);
postsRouter.post('/:id/commentPost', auth, commentPost);
postsRouter.patch('/:id', auth, updatePost);
postsRouter.delete('/:id', auth, deletePost);
postsRouter.patch('/:id/likePost', auth, likePost);

export default postsRouter;
