const sendError= require("../Tools/MiddelwareTools");
// Middleware qui test l'application en mode production or developement and afficher errer
module.exports = globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  process.env.NODE_ENV == "development"
    ? sendError.sendErrorForDev(err, res)
    : sendError.lengthsendErrorForProd(err, res);
};
module.exports = globalError;
