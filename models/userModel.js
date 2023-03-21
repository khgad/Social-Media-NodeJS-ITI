const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Object,
      default: {
        url: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png",
        publicId: null,
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // this function runs only if password has updated so that we need to encrypt it again
  if (!this.isModified("password")) {
    return next();
  }
  // hashing password
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.generateToken = function () {
  return jwt.sign({ id:this._id ,isAdmin:this.isAdmin}, process.env.JWT_SECRET, {
    expiresIn: "90d",
})}


const User = mongoose.model("User", userSchema);
module.exports = User;
