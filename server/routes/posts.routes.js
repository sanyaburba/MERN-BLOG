import express from "express";
import {getPosts, createPost, deletePost, updatePost, likePost} from "../controllers/posts.controller.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.delete('/:id', deletePost);

export default router;
