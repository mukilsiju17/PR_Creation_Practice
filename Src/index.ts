import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './route';
import dbconnection from './dbConnection';


// Database connection
dbconnection();


dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
