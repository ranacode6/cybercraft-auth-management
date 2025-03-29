import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import connectDB from './config/db.js';
import contactRoute from './routes/contactRoutes.js';
import authRoute from './routes/authRoutes.js';
import passport from 'passport';

app.use(passport.initialize());
require('./services/googleStrategy.jsx');

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(helmet());

const isProduction = process.env.NODE_ENV === 'production';
const CLIENT_URL = isProduction
  ? process.env.CLIENT_URL_PROD
  : process.env.CLIENT_URL_DEV;
const corsOptions = {
  origin: [CLIENT_URL],
  credentials: true,
  methods: ['GET,POST,PUT,DELETE'],
  allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));
app.use(compression());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Routes
app.use('/api/contacts', contactRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
