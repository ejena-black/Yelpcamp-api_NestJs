import mongoose from 'mongoose';

export const commentSchema = new mongoose.Schema({
  text: String,
});
