const Product = require("../models/product")

const getAllProduct = async (req, res, next) => {
    let page = req.query.page;
    const page_size = 8;
    let contact = req.query.contact;
    let sort = req.query.sort;
    let search = req.query.search;
    let skipClient = Number(req.query.skip);
    let limitClient = Number(req.query.limit);
    const idCategory = req.query.category;
    if(contact) {
        try {
            const products = await Product.find().populate(contact);
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }else if(idCategory && !sort){
        try {
            const products = await Product.find({category: idCategory})
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(idCategory && page){
        const skip = (page - 1) * page_size;
        try {
            const products = await Product.find({category: idCategory}).skip(skip).limit(page_size);
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(page && !sort){
        const skip = (page - 1) * page_size;
        try {
            const products = await Product.find().skip(skip).limit(page_size)
            res.json({success: true, products: products, page: page, limit: page_size});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(page && sort){
        const skip = (page - 1) * page_size;
        try {
            const products = await Product.find().skip(skip).limit(page_size).sort({price: sort})
            res.json({success: true, products: products, page: page, limit: page_size});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(sort && !idCategory){
        try {
            
            const products = await Product.find().populate("category").sort({price: sort})
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(sort && idCategory){
        try {
            const products = await Product.find({category: idCategory}).sort({price: sort})
            debugger;
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(sort){
        try {
            const products = await Product.find().populate("category").sort({price: sort}).limit(page_size);
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }else if(search){
        try {
            const products = await Product.find( { '$text': {'$search' : search } } )
            console.log(products);
            res.json({success: true, products: products})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
       
    }
    else if(limitClient && !skipClient){
        try {
            const products = await Product.find({}).limit(8)
            console.log(products.length)
            res.json({success: true, products: products, page: page, limit: page_size});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else if(skipClient && limitClient){
        try {
            const products = await Product.find({}).skip(8).limit(8)
            console.log(products.length)
            res.json({success: true, products: products, page: page, limit: page_size});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    else{
        try {
            const products = await Product.find().populate("category");
            res.json({success: true, products: products});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}

const getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({_id: id})
        res.json({success: true, product: product});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


const postProduct = async (req, res) => {
    const {title, description, price, imageURL, category, information} = req.body;
    if(!title){
        return res.status(404).json({success: false, message: 'Title is required'})
    }
    try {
        const newProduct = new Product({title, description, price, imageURL, category, information})
        await newProduct.save()

        res.status(200).json({success: true, message: 'Product saved successfully', product: newProduct, userId: req.userId})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const putProduct = async (req, res) => {
    const {title, description, price, imageURL, category, information} = req.body;
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
            information
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
}

const deleteProduct = async (req, res) => {
    try {
        const ProductDeleteConditions = { _id: req.params.id, userId: req.userId}
        deletePrd = await Product.findOneAndDelete(ProductDeleteConditions)
        
        // user not authorised to update Product
        if(!deletePrd){
            return res.status(401).json({success: false, message: 'User not authorised to delete Product'})
        }
        return res.status(200).json({success: true, message: 'Delete Product successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


module.exports = {getAllProduct, getOneProduct ,postProduct, putProduct, deleteProduct}
