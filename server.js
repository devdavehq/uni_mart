import express from 'express';
import dotenv from 'dotenv'
import multer from 'multer'
import mongoose from 'mongoose';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import userlogic from './routes/users/_index.js';
import connectDB from './models/dbconn.js'
import jwt from 'jsonwebtoken'
import sendgrid from '@sendgrid/mail'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import Session from 'express-session'
import validator from 'express-validator'
const app = express();

const corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
};
  
  app.use(cors(corsOptions));

// Load environment variables from .env file (if it exists)
dotenv.config();

const __filename = fileURLToPath(import.meta.url); // Get file path
const __dirname = dirname(__filename); // Extract directory name

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Specify EJS as the view engine



app.use(express.static(join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


    app.get('/', (req, res) => {
        res.render('users/signup');
    })


    app.use('/api',userlogic)





// app.listen(PORT, () => `listening to server on http://localhost:${PORT}`);
const PORT = process.env.PORT || 2088;
app.listen(PORT, () => `listening to server on http://localhost:2088`);