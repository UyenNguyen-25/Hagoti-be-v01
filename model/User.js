const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
    },
    phoneNumber: {
      type: String,
      required: true,
      maxlength: 11,
    },
    avatar: {
      type: String,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "servicePackage",
    },
    transactionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
