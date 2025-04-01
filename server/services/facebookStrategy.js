import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import User from '../models/User.js';

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.SERVER_URL_PROD
    : process.env.SERVER_URL_DEV;

// facebook strategy
const facebookLogin = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `${serverUrl}${process.env.FACEBOOK_CALLBACK_URL}`,
    profileFields: [
      'id',
      'email',
      'gender',
      'profileUrl',
      'displayName',
      'locale',
      'name',
      'timezone',
      'updated_time',
      'verified',
      'picture.type(large)'
    ]
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    try {
      const oldUser = await User.findOne({ facebookId: profile.id });

      if (oldUser) {
        return done(null, oldUser);
      } else {
        const newUser = await new User({
          provider: 'facebook',
          facebookId: profile.id,
          // username: `user${profile.id}`,
          // email: profile.emails[0].value,
          name: profile.displayName,
          avatar: profile.photos[0].value
        });
        const insertedUser = await newUser.save(); // Save the new user
        done(null, insertedUser);
      }
    } catch (err) {
      console.log(err);
    }
  }
);

passport.use(facebookLogin);
