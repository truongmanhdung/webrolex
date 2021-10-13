const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
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
            }
        }
    ],
    status: {
        type: Number,
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
