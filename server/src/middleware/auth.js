const jwt = require('jsonwebtoken');
const User = require('../models/user')
const verifyToken = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) {
        return res.status(401).json({success: false, message: 'Access token not found'})
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findOne({ _id: decoded.userId});
        
        if(user.username !== 'admin') {
            return res.status(401).json({ message: false, message: 'Invalid Admin'})
        }
        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, message: "Invalid token"})
    }
}

module.exports = verifyToken