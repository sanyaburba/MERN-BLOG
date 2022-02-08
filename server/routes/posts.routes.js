import express from "express";
import {getPosts, createPost, deletePost, updatePost, likePost} from "../controllers/posts.controller.js";
import auth from "../middleware/auth.middleware.js";

const postsRouter = express.Router();

postsRouter.get('/', getPosts);
postsRouter.post('/', auth, createPost);
postsRouter.patch('/:id', auth, updatePost);
postsRouter.delete('/:id', auth, deletePost);
postsRouter.patch('/:id/likePost', auth, likePost);

export default postsRouter;
