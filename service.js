require("dotenv").config();
const express = require("express");
const mongoose = require("./Config/db");
const globalError = require("./Middlewares/ErreurMiddelware");
const routeErrorHandler = require("./Middlewares/RouterMiddelware");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
require("./Routers/AuthentificationRouter")(app);

app.get("/login", (req, res) => {
  res.render("login");
});

app.use(globalError, routeErrorHandler);
app.listen(process.env.PORT || 8082, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
module.exports = app;
