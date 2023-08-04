import { userModel } from "../models/users.js";

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
      return true;
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
    console.log(`findUser() = ${foundUser}`);
    if (foundUser) {
      const query = await userModel.find({ password: data.password }).exec();
      // Find out if theres a better way to reach password instead of query[0]
      console.log(`Inside query[0].password == ${query[0].password}`);

      if (data.password == query[0].password) {
        return console.log("data.password == query.password = TRUE");
      } else {
        return console.log("data.password == query.password = FALSE");
      }
    } else {
      return console.log("return User not found");
    }
  } catch (error) {
    console.log(`This is the error message : ${error}`);
  }
};
