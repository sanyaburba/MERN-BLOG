import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    file: String, // convert image to a string with Base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema, null);

export default PostMessage;
