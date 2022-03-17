import mongoose from 'mongoose';

const ChatMessageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    sender: {
        type: String,
    },
    text: {
        type: String,
    }
}, {timestamps: true});

const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

export default ChatMessage;