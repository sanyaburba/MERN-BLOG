import express from "express";
import {login, registration} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/registration', registration);

export default userRouter;