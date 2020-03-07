import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  password: String,
});
