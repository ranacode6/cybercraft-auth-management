import mongoose from 'mongoose';

const userSchema = new Schema(
  {
    provider: {
      type: String,
      required: true
    },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
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
    role: { type: String, enum: ['admin', 'user'], default: 'USER' },
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
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
