const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController");
module.exports = (app) => {
  router.post("/register", Authentification.Register);
  app.use("/api/auth/", router);
};
