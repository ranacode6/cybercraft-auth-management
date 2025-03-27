import express from 'express';
import { body } from 'express-validator';
import passport from 'passport';
import {
  register,
  login,
  getProfile,
  googleCallback,
  facebookCallback
} from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';

const authRoute = express.Router();

// Validation middleware
const registerValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
];

const loginValidation = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

authRoute.post('/register', registerValidation, register);
authRoute.post('/login', loginValidation, login);
authRoute.get('/profile', verifyToken, getProfile);

// Social authentication routes
authRoute.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
authRoute.get(
  '/google/callback',
  passport.authenticate('google'),
  googleCallback
);

authRoute.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);
authRoute.get(
  '/facebook/callback',
  passport.authenticate('facebook'),
  facebookCallback
);

export default authRoute;
