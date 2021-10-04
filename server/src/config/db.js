/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/rolex_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { connect }