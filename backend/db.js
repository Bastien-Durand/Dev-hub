import { mongoose } from "mongoose";
import "dotenv/config";

export const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ske7bze.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("-- Database connection successful --");
  } catch (error) {
    console.log(`An error has occured: ${error}`);
  }
};
