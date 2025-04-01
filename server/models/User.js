import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      required: true
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      // required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      // required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      maxlength: 60
    },
    fullName: String,
    avatar: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    bio: String,
    // google
    googleId: {
      type: String,
      unique: true,
      sparse: true
    },
    // fb
    facebookId: {
      type: String,
      unique: true,
      sparse: true
    }
  },
  { timestamps: true }
);

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      expiresIn: '12h',
      id: this._id,
      provider: this.provider,
      email: this.email
    },
    process.env.JWT_SECRET
  );
  return token;
};

const User = mongoose.model('User', userSchema);

export default User;
