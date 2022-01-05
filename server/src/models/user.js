const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4 }  = require("uuid");
const { createHmac } = require("crypto");
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    salt: {
      type: String
    },
    hashed_password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    phone: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
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
    collection: "users",
    timestamps: true
  }
);


UserSchema.virtual('password')
    .set(function (password) { // abcde
        console.log("password: " + password);
        // this.salt = v4.uuid4(); //9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
        // this.hashed_password = this.encrytPassword(password);
    });

UserSchema.methods = {
    authenticate(password) {
        return this.encrytPassword(password) == this.hashed_password;
    },
    encrytPassword(password) {
        if (!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = mongoose.model("users", UserSchema);
