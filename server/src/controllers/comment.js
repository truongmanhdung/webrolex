const Comment = require("../models/comment");

const getComment = async (req, res) => {
    const productId = req.query.productId;
    if(productId){
        try {
            const comments = await Comment.find({productId: productId, status: 1}).sort({time: 1}).populate('userId').populate('productId').limit(3);
            res.json({success: true, comments: comments})
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }else{
        try {
            const comments = await Comment.find().sort({time: 1}).populate('userId').populate('productId').limit(3);
            res.json({success: true, comments: comments})
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
    
}

const postComment = async (req, res) => {
    const {productId, userId, comment} = req.body;
    if(!comment){
        return res.status(404).json({success: false, message: 'Comment is required'})
    }
    try { 
        const newComment = new Comment({userId, productId, comment: comment})
        await newComment.save()
        res.status(200).json({success: true, message: 'Comment add successfully', commentSuccess: newComment})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const updateStatus = async (req, res) => {
    const { status } =
      req.body;
    const id = req.params.id;
    console.log(status)
    let comment = {
      status: status,
    };
    try {
      const OrderConditions = { _id: id };
      comment = await Comment.findOneAndUpdate(OrderConditions, comment, {
        new: true,
      });
      return res
        .status(200)
        .json({
          success: true,
          message: status === true ? 'Đã hiện bình luận' : 'Đã ẩn bình luận',
          comment: comment,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };


module.exports = {getComment, postComment, updateStatus}