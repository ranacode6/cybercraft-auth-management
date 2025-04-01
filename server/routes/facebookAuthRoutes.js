import { Router } from 'express';
import passport from 'passport';

const facebookAuthRoute = Router();

facebookAuthRoute.get(
  '/api/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  })
);

const clientUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL_PROD
    : process.env.CLIENT_URL_DEV;

facebookAuthRoute.get(
  '/api/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/'
  }),
  (req, res) => {
    // console.log(req.user);
    const token = req.user.generateJWT();
    res.cookie('x-auth-cookie', token);
    res.redirect(clientUrl);
  }
);

export default facebookAuthRoute;
