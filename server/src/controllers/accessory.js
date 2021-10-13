
const Accessory = require('../models/accessory');
const getAll = async (req, res) => {
    try {
        const accessorys = await Accessory.find()
        res.json({success: true, accessorys: accessorys})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const postAccessorys = async (req, res) => {
    const {title, imageURL, price} = req.body;
    console.log(title, imageURL, price);
    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        const newAccessorys = new Accessory({title, imageURL, price})
        await newAccessorys.save()
        res.status(200).json({success: true, message: 'Accessorys saved successfully', accessorys: newAccessorys})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports =  {getAll, postAccessorys}