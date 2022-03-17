import express from "express";
import {
    getPosts,
    getPostsBySearch,
    createPost,
    deletePost,
    updatePost,
    likePost,
    getPost,
    commentPost, fetchAllPostsForAdmin
} from "../controllers/posts.controller.js";
import auth from "../middleware/auth.middleware.js";
import checkRole from "../middleware/checkRole.middleware.js";

const postsRouter = express.Router();

postsRouter.get('/search', getPostsBySearch);
postsRouter.get('/', getPosts);
postsRouter.get('/allposts',checkRole('ADMIN'), fetchAllPostsForAdmin);
postsRouter.get('/:id', getPost);
postsRouter.post('/', auth, createPost);
postsRouter.post('/:id/commentPost', commentPost);
postsRouter.patch('/:id', auth, updatePost);
postsRouter.delete('/:id', auth, deletePost);
postsRouter.patch('/:id/likePost', auth, likePost);

export default postsRouter;
