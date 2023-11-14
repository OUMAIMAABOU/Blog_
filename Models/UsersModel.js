const mongoose = require("mongoose");
const user = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      require: true,
    },
    password: String,
    token: String,
    is_active: {
      type: Boolean,
      default: false,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", user);
