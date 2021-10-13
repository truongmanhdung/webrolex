const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessorySchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
    },
    imageURL: {
        type: String,
    },
    price: {
        type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    createdUpdate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "accessorys",
  }
);

module.exports = mongoose.model("accessorys", AccessorySchema);
