import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import router from './routes/routes.js';
import  profileRouter from './routes/profileRoutes.js';
import cookieParser from 'cookie-parser';
import requireAuth from './middleware/middleware.js';
import experienceRouter from './routes/experienceRoutes.js';
import * as dotenv from 'dotenv';
import portfolioRouter from './routes/portfolioRoutes.js';
dotenv.config()

const app = express();
const port = process.env.PORT;

//middleware 
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

//Connecting moongose
const dbURI = process.env.MONGO_DB;
mongoose.connect(dbURI)
    .then(() => console.log('db connected!'))
    .catch(() => console.log('connection failed'));





app.use(router);
app.use(profileRouter)
app.use(experienceRouter)
app.use(portfolioRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
