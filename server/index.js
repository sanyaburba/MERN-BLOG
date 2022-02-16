import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postsRouter from './routes/posts.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/user', userRouter);

var mongoDB = 'mongodb://localhost:27017/blog';

const PORT = process.env.PORT || 4000;

async function start() {
    try {
        // await mongoose.connect(process.env.CONNECTION_URL);
        await mongoose.connect(mongoDB);
        app.listen(PORT, () => console.log('Server starting on port ' + PORT));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start().catch(e=> new Error('Server error: ' + e.message))