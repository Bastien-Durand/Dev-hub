import { newUser } from "../models/users.js";

export const createUser = async () => {
  try {
    const createNewUser = newUser({ username: "John", password: "Password" });
    console.log(`User is ${createNewUser}`);
    await createNewUser.save();
    console.log("Saved!");
  } catch (error) {
    console.log(error);
  }
};
