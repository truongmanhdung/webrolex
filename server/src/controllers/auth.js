const argon2 = require("argon2");
const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;

  // validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Messing username or password" });
  }
  try {
    // check for existing user
    const user = await User.findOne({ username: username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username " });
    }
    // username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid  password" });
    }

    if (username === "admin") {
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      return res.json({
        success: true,
        admin: true,
        message: "login successfully",
        token: accessToken,
      });
    } else {
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      return res.json({
        username: user.username,
        success: true,
        message: "login successfully",
        token: accessToken,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const register = async (req, res) => {
  const { username, email, password, avatar } = req.body;

  // validation
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Messing username or password" });
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already in use" });
    }

    const hasPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      email,
      password: hasPassword,
      avatar:
        avatar ||
        "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    });
    await newUser.save();
    // return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      username: newUser.username,
      message: "register successfully",
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  const username = req.query.username;
  if(username){
    try {
      const user = await User.findOne({ username: username});
      res.json({ success: true, user: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }else{
    try {
      const users = await User.find();
      res.json({ success: true, users: users });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
  
};


module.exports = { login, register, getAll};
