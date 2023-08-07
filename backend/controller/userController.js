import { userModel } from "../models/users.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
  try {
    const doesEmailExist = await findUser(data);

    if (!doesEmailExist) {
      const createNewUser = userModel({
        email: data.email,
        password: data.password,
      });

      const userCreated = await createNewUser.save();
      return { ...userCreated, message: "User created" };
    } else {
      return { message: "User already exists.", status: 400 };
    }
  } catch (error) {
    console.log(error);
  }
};

export const findUser = async (data) => {
  try {
    const email = data.email;
    const query = await userModel.find({ email: email }).exec();

    if (query.length > 0) {
      return query;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const foundUser = await findUser(data);
    const user = foundUser[0].email;

    if (foundUser[0].password == data.password) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      console.log("Password Matches");
      console.log({ accessToken: accessToken });
      console.log(accessToken);
    } else {
      console.log("Not a match");
    }
  } catch (error) {
    console.log(error);
  }
};
