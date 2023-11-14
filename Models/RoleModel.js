const mongoose = require("mongoose");
const role = new mongoose.Schema({
  role: {
    type: String,
    unique: true,
    require: true,
  },
});
module.exports = mongoose.model("roles", role);
