import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    const newMessage = new Message(req.body)

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

export const fetchAllChatMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        });
        res.status(200).json(messages)
    } catch (e) {
        res.status(500).json(e.message)
    }
}