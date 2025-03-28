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
import pdfRoute from './routes/pdfRoutes.js';

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(helmet());
const corsOptions = {
  origin: [process.env.CLIENT_URL],
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
api.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/api/contacts', contactRoute);
app.use('/api/auth', authRoute);
app.use('/api', pdfRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
