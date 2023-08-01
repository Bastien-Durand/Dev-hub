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
      return userCreated;
    } else {
      return { message: "User already exists.", status: 400 };
    }
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (data) => {
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
