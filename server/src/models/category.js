const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    imageURL: {
        type: String,
        default: 'https://content.rolex.com/dam/homepage/hss/roller/watches/submariner/homepage-rolex-submariner.jpg?imwidth=380'
    },
    videoURL: {
        type: String,
        default: 'https://content.rolex.com/dam/new-watches-2020/new-submariner/videos/cover/new-submariner-video-cover.mp4'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('category',CategorySchema)