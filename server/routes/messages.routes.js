import express from "express";
import {fetchAllChatMessages, sendMessage} from "../controllers/messages.controller.js";

const messagesRouter = express.Router();

messagesRouter.post('/', sendMessage);
messagesRouter.get('/:conversationId', fetchAllChatMessages);

export default messagesRouter;