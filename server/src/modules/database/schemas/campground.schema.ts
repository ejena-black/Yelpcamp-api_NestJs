import mongoose from 'mongoose';

export const campgroundSchema = new mongoose.Schema({
  title: String,
  description: String,
});
