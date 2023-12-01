import User from "../models/User.js";
import jwt from "jsonwebtoken";

//handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "that emails is already registered";
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 34 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signup_get = (req, res) => {
  res.send("signup");
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).send({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
};

const login_get = (req, res) => {
  res.send({ msg: "login required" });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).send({ user: user._id, jwt: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
};

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

const authController = {
  signup_get,
  signup_post,
  login_get,
  login_post,
  logout_get,
};

export default authController;
