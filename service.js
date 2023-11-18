require("dotenv").config();
const express = require("express");
const mongoose = require("./Config/db");
const globalError = require("./Middlewares/ErreurMiddelware");
const routeErrorHandler = require("./Middlewares/RouterMiddelware");
const serviceRouter = require("./Routers/ServiceRouter");
const app = express();
app.use(express.json());
require("./Routers/AuthentificationRouter")(app);
// serviceRouter(app);
app.use(globalError, routeErrorHandler);
app.listen(process.env.PORT || 8082, () => {
  console.log(`https://localhost:${process.env.PORT}`);
});
module.exports = app;
