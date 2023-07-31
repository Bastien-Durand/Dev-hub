import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export const newUser = mongoose.model("Users", userSchema);
