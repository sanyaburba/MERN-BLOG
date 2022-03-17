import express from "express";
import {fetchUsers, login, registration} from "../controllers/user.controller.js";
// import checkRole from "../middleware/checkRole.middleware";

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/registration', registration);
userRouter.get('/fetchUsers',  fetchUsers);

export default userRouter;