import { mongoose } from "mongoose";

export const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@users.56dnfsq.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("-- Database connection successful --");
  } catch (error) {
    console.log(`An error has occured: ${error}`);
  }
};
