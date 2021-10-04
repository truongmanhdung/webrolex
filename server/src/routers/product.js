const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth")
const Product = require("../models/product")

// GET api/products

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, products: products});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// POST api/products

router.post("/", verifyToken, async (req, res) => {
    const {title, description, price, imageURL, category} = req.body;
    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        const newProduct = new Product({title, description, price, imageURL, category})
        await newProduct.save()

        res.status(200).json({success: true, message: 'Product saved successfully', product: newProduct, userId: req.userId})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// PUT api/products/:id

router.put("/:id", verifyToken, async (req, res) => {
    const {title, description, price, imageURL, category} = req.body;
    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        let updateProduct = {
            title,
            description: description || '',
            price,
            imageURL,
            category,
        }
        const ProductUpdateConditions = { _id: req.params.id, userId: req.userId}
        updateProduct = await Product.findOneAndUpdate(ProductUpdateConditions, updateProduct, {new: true})
        
        // user not authorised to update Product
        if(!updateProduct){
            return res.status(401).json({success: false, message: 'User not authorised to update Product'})
        }
        return res.status(200).json({success: true, message: 'User updated Product successfully', Product: updateProduct})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// DELETE api/products/:id

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const ProductDeleteConditions = { _id: req.params.id, userId: req.userId}
        deleteProduct = await Product.findOneAndDelete(ProductDeleteConditions)
        
        // user not authorised to update Product
        if(!deleteProduct){
            return res.status(401).json({success: false, message: 'User not authorised to delete Product'})
        }
        return res.status(200).json({success: true, message: 'User delete Product successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

module.exports = router