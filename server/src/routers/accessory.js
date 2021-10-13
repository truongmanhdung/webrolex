const express = require("express");
const router = express.Router();
const { getAll, postAccessorys } = require("../controllers/accessory") ;
const verifyToken = require("../middleware/auth");

// POST api/auth/register

router.get("/accessory", getAll);
router.post("/accessory",verifyToken, postAccessorys);

module.exports = router;