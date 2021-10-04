const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth")
const Category = require("../models/category");

// GET api/categorys

router.get("/", async (req, res) => {
    try {
        const categorys = await Category.find()
        res.json({success: true, categorys: categorys})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


// GET api/categorys/:id

router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id})
        res.json({success: true, category: category})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


// POST api/categorys

router.post("/",verifyToken, async (req, res) => {
    const {title, imageURL, videoURL} = req.body;
    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        const newCategory = new Category({title, imageURL, videoURL})
        await newCategory.save()

        res.status(200).json({success: true, message: 'category saved successfully', category: newCategory})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// PUT api/categorys:id

router.put("/:id", verifyToken, async (req, res) => {
    const {title, imageURL, videoURL} = req.body;

    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        let updateCategory = {
            title, 
            imageURL: imageURL || 'https://content.rolex.com/dam/homepage/hss/roller/watches/submariner/homepage-rolex-submariner.jpg?imwidth=380',
            videoURL: videoURL || 'https://content.rolex.com/dam/new-watches-2020/new-submariner/videos/cover/new-submariner-video-cover.mp4',
        }
        const categoryUpdateConditions = { _id: req.params.id, userId: req.userId}
        
        updateCategory = await Category.findOneAndUpdate(categoryUpdateConditions, updateCategory, {new: true})
        
        // user not authorised to update category
        if(!updateCategory){
            return res.status(401).json({success: false, message: 'User not authorised to update category'})
        }
        return res.status(200).json({success: true, message: 'User updated category successfully', category: updateCategory})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// delete api/categorys/:id

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const categoryDeleteConditions = { _id: req.params.id, userId: req.userId}
        deleteCategory = await Category.findOneAndDelete(categoryDeleteConditions)  
        // user not authorised to update category
        if(!deleteCategory){
            return res.status(401).json({success: false, message: 'User not authorised to deleted category'})
        }
        return res.status(200).json({success: true, message: 'User deleted category successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

module.exports = router;