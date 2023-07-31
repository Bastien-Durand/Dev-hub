import { userModel } from "../models/users.js";

export const createUser = async (data) => {
  try {
    console.log(data.email);
    console.log("-- Database Query --");

    const doesEmailExist = await findUser(data);

    if (!doesEmailExist) {
      const createNewUser = userModel({
        email: data.email,
        password: data.password,
      });

      const userCreated = await createNewUser.save();
      return userCreated;
    } else {
      return { message: "Email already exists...", status: 400 };
    }
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (data) => {
  try {
    const email = data.email;
    const query = await userModel.find({ email: email }).exec();

    console.log("query: ", query);

    if (query.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// get input email
// get database items with input email
// if existant - return
// if non existant - createNewUser.save()
