import User from '../models/User.js';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // Create a new user with the hashed password
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword // Store the hashed password
    });

    // Return user information (excluding the password for security)
    return res.status(201).json({
      message: 'Registration Successful!'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    const isProduction = process.env.NODE_ENV;
    return res
      .cookie('token', token, {
        httpOnly: true,
        secure: isProduction === 'production' ? true : false,
        sameSite: 'Strict', // or 'Lax'
        expires: new Date(Date.now() + 3600000), // 1 hour
        path: '/'
      })
      .json({
        token,
        user: { id: user._id, fullnName: user.fullName, email: user.email }
      });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const googleCallback = async (req, res) => {
  try {
    const { id, emails, displayName } = req.user;

    let user = await User.findOne({ email: emails[0].value });

    if (!user) {
      user = await User.create({
        fullName: displayName,
        email: emails[0].value,
        password: bcrypt.hashSync(Math.random().toString(36).slice(-8), 10),
        authProvider: 'google',
        providerId: id
      });
    }

    res.redirect(
      `${process.env.FRONTEND_URL}?token=${generateToken(user._id)}`
    );
  } catch (error) {
    res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`);
  }
};

export const facebookCallback = async (req, res) => {
  try {
    const { id, emails, displayName } = req.user;

    let user = await User.findOne({ email: emails[0].value });

    if (!user) {
      user = await User.create({
        fullName: displayName,
        email: emails[0].value,
        password: bcrypt.hashSync(Math.random().toString(36).slice(-8), 10),
        authProvider: 'facebook',
        providerId: id
      });
    }

    res.redirect(
      `${process.env.FRONTEND_URL}?token=${generateToken(user._id)}`
    );
  } catch (error) {
    res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`);
  }
};
