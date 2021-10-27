const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    imageURL: [{ type: String }],
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
    information: {
      kichthuoc: {
        type: String,
        default: "40MM"
      },
      doday: {
        type: String,
        default: "7MM"
      },
      loaimay: {
        type: String,
        default: "MIYOTA QUARTZ"
      },
      kichcoday: {
        type: String,
        default: "20MM"
      },
      chongnuoc: {
        type: String,
        default: "3ATM"
      },
      matkinh: {
        type: String,
        default: "SAPPHIRE"
      },
      chatlieuday: {
        type: String,
        default: "DÂY KIM LOẠI"
      },
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
    collection: "products",
  }
);
ProductSchema.index({"title":"text", "description":"text"})
module.exports = mongoose.model("products", ProductSchema);
