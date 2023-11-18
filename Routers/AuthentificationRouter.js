const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = (app) => {
  router.post("/register", Authentification.Register);
  router.get("/login", Authentification.login);
  app.use("/api/auth/", router);
};
