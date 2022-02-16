import express from "express";
import {login, registration} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/registration', registration);
// userRouter.get('/auth', check)

export default userRouter;