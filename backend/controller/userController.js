import { newUser } from "../models/users.js";

export const createUser = async (data) => {
  try {
    const createNewUser = newUser({
      username: data.username,
      password: data.password,
    });
    await createNewUser.save();
  } catch (error) {
    console.log(error);
  }
};
