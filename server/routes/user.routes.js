import express from "express";
import {login, registration} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post('/signin', login);
userRouter.post('/signup', registration);
// userRouter.get('/auth', check)

export default userRouter;