import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.routes.js';


const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to blog API')
})
const PORT = process.env.PORT || 4000;


async function start() {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        app.listen(PORT, () => console.log('Server starting on port ' + PORT))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()