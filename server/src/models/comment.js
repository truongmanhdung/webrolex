const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
    comment: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "comments",
  }
);

module.exports = mongoose.model("comments", commentSchema);
