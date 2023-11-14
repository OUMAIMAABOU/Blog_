require("dotenv").config();
const express = require("express");
const mongoose = require("./Config/db");
const globalError = require("./Middlewares/ErreurMiddelware");
const routeErrorHandler = require("./Middlewares/RouterMiddelware");
const app = express();
app.use(express.json());
app.use(globalError, routeErrorHandler);
app.listen(process.env.PORT || 8082, () => {
  console.log(`https://localhost:${process.env.PORT}`);
});
require("./Routers/AuthentificationRouter")(app);

module.exports = app;
