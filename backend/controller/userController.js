import { userModel } from "../models/users.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcryptjs";

const numSaltRounds = parseInt(process.env.SALT_ROUNDS);

export const createUser = async (data) => {
  try {
    const doesEmailExist = await findUser(data);

    if (!doesEmailExist) {
      const password = data.password;
      const hashedPassword = bcrypt.hashSync(password, numSaltRounds);
      const createNewUser = userModel({
        email: data.email,
        password: hashedPassword,
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
    if (!foundUser) {
      return { message: "User email doesn't exist.", status: 404 };
    }
    const user = foundUser[0].email;
    const password = foundUser[0].password;

    if (bcrypt.compareSync(data.password, password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

      return { accessToken, message: accessToken };
    } else {
      return { message: "Incorrect password", status: 404 };
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const authenticateJWT = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
