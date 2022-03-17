import express from "express";
import {
    getConversations,
    getConversationsByUserId
} from "../controllers/conversations.controller.js";

const conversationRouter = express.Router();

conversationRouter.post('/', getConversations);
conversationRouter.get('/:userId', getConversationsByUserId);

export default conversationRouter;