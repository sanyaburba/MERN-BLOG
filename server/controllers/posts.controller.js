import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const checkValidatedID = (_id, res) => {
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that id');
}

export const getPosts = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 6;
        const startIndex = (+page - 1) * LIMIT; // start index of every page
        const total = await PostMessage.countDocuments({});

        const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        res.status(200).json({data: posts, currentPage: +page, numberOfPages: Math.ceil(total / LIMIT)});
    } catch (e) {
        res.status(404).json({message: e.message});
    }
}

export const fetchAllPostsForAdmin = async (req, res) => {
    try {
        const posts = await PostMessage.find().sort({_id: -1});
        const total = await PostMessage.count();

        res.status(200).json({data: posts, total});
        console.log(total)
    } catch (e) {
        res.status(404).json({message: e.message});
    }

}

export const getPostsBySearch = async (req, res) => {
    const {searchQuery, tags} = req.query
    try {
        const title = new RegExp(searchQuery, 'i'); //ignore case

        const posts = await PostMessage.find({$or: [{title}, {tags: {$in: tags.split(',')}}]});

        res.json({data: posts});
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const getPost = async (req, res) => {
    const {id} = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body; // or const body
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const {title, createdAt, name, likes, updatedAt, message, file, tags, comments} = req.body;

    checkValidatedID(id, res)
    const updatedPost = { comments, title, message, likes, createdAt, updatedAt, name,tags, file, _id: id};
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    checkValidatedID(id, res)
    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if (!req.userId) return res.json({message: "you need to be logged in"})

    checkValidatedID(id, res)

    const post = await PostMessage.findById(id)

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);
}

export const commentPost = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const post = await PostMessage.findById(id);


    post.comments.push(value);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);
}
