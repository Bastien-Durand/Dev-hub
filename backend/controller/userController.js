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

    if (foundUser[0].password == data.password) {
      console.log("Password matches");
    } else {
      console.log("Not a match");
    }
  } catch (error) {
    console.log(error);
  }
};
