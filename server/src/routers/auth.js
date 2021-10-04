const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// POST api/auth/register

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

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
    });
    await newUser.save();
    // return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "register successfully",
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST api/auth/login

router.post("/login", async (req, res) => {
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
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "login successfully",
      token: accessToken,
    });
  } catch (error) {}
});

module.exports = router;
