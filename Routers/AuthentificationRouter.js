const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = (app) => {
  router.post("/register", Authentification.Register);
  router.post("/login", Authentification.login);
  router.put("/configiration/:token", Authentification.VerificationToken);

  app.use("/api/auth/", router);
};
