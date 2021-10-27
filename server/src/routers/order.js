const express = require("express");
const { getOrder, postOrder, updateStatus, getOrderById } = require("../controllers/order");
const router = express.Router();



router.get('/orders', getOrder);


router.get('/orders/:id', getOrderById);
// POST api/auth/register

router.post("/orders", postOrder);

// POST api/auth/login

router.put("/orders/:id", updateStatus);

module.exports = router;
