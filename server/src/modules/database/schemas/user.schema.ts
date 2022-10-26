import mongoose from 'mongoose';

export const usereSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// usereSchema.statics.signup = async function (email, password) {
//   const exists = this.findOne({ email });
//   if (exists) {
//     throw Error('This email is already registered to an account');
//   }

//   const salt = bcr
// };
