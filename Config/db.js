const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONG_URL, {})
  .then((res) => console.log("connection succ"))
  .catch((err) => console.log(err));
