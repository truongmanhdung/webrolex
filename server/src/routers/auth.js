const express = require("express");
const router = express.Router();


const { login, register, getAll } = require("../controllers/auth") ;

// POST api/auth/register

router.post("/auth/register", register);

// POST api/auth/login

router.post("/auth/login", login);

router.get("/user", getAll)

module.exports = router;
