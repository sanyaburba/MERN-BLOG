import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: String,
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
    },
    tags: [String],
    file: String, // convert image to a string with Base64
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema );

export default PostMessage;
