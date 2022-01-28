import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const checkValidatedID = (_id, res) => {
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that id');
}

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body; // or const body
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const post = req.body;

    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send('No post with that id');
    checkValidatedID(id, res)

    const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, id}, {new: true});

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

    checkValidatedID(id, res)

    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);

}