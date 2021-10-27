const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    username: {
      type: String,
    },
    email: { 
      type: String
    },
    phone: { type: Number},
    address: { type: String},
    total: {
      type: Number,
    },
    listorder: [
      {
        idProduct: {
          type: Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    status: {
      type: Number,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "orders",
  }
);

module.exports = mongoose.model("orders", orderSchema);
