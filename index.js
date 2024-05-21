
import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import postRoute from './routes/postRoute.js';
import imageRoute from './routes/imageRoute.js';
import animalRoute from './routes/animalRoute.js';
import commentToAnimalRoute from './routes/commentToAnimalRoute.js';
import commentToPostRoute from './routes/commentToPostRoute.js';
import donationRoute from './routes/donationRoute.js';


const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error: ', error);
}
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/posts', postRoute);
app.use('/image', imageRoute);
app.use('/animal', animalRoute);
app.use('/commentanimal', commentToAnimalRoute);
app.use('/commentpost', commentToPostRoute);
app.use('/donation', donationRoute);
//----------------- variant 1--------------------
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.listen(PORT,HOST,(error)=>{
    error
    ? console.log(error)
    :console.log(`Server OK.`);
});
