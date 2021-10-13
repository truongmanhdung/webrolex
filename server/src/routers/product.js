const express = require("express");
const { getAllProduct, getOneProduct ,postProduct, putProduct, deleteProduct} = require("../controllers/product");
const router = express.Router();
const verifyToken = require("../middleware/auth")

// GET api/products

router.get("/products", getAllProduct)


router.get("/products/:id", getOneProduct)

// POST api/products

router.post("/products", verifyToken, postProduct)

// PUT api/products/:id

router.put("/products/:id", verifyToken, putProduct)

// DELETE api/products/:id

router.delete("/products/:id", verifyToken, deleteProduct)



module.exports = router