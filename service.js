require("dotenv").config();
const express = require("express");
const mongoose = require("./Config/db");
const app = express();
app.use(express.json());
app.listen(process.env.PORT || 8082, () => {
  console.log(`https://localhost:${process.env.PORT}`);
});
module.exports = app;
