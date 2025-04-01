import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.SERVER_URL_PROD
    : process.env.SERVER_URL_DEV;

const googleLogin = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${serverUrl}${process.env.GOOGLE_CALLBACK_URL}`,
    passReqToCallback: true
  },
  async (req, accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in our own db
      const currentUser = await User.findOne({ googleId: profile.id });

      if (currentUser) {
        return done(null, currentUser);
      } else {
        const newUser = new User({
          provider: 'google',
          googleId: profile.id,
          username: `user${profile.id}`,
          email: profile.emails[0].value, // Use the first email from the profile
          fullName: profile.displayName,
          avatar: profile._json.picture // Use _json to access the picture URL
        });

        const insertedUser = await newUser.save(); // Save the new user
        done(null, insertedUser);
      }
    } catch (err) {
      return done(err);
    }
  }
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(googleLogin);
