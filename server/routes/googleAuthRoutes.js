import { Router } from 'express';
import passport from 'passport';

const googleAuthRoute = Router();

googleAuthRoute.get(
  '/api/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

const isProduction = process.env.NODE_ENV === 'production';
const CLIENT_URL = isProduction
  ? process.env.CLIENT_URL_PROD
  : process.env.CLIENT_URL_DEV;

googleAuthRoute.get(
  '/api/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    const token = req.user.generateJWT();
    res.cookie('x-auth-cookie', token);
    res.redirect(CLIENT_URL);
  }
);

export default googleAuthRoute;
