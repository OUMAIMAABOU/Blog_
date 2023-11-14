const {sendErrorForProd,sendErrorForProd}=require('../Tools/MiddelwareTools')
// Middleware qui test l'application en mode production or developement and afficher errer
module.exports= globalError = (err,req,res,next)=> {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    if(process.env.NODE_ENV == "development"){
        sendErrorForDev(err,res);
    }else {
        sendErrorForProd(err,res)
    }
};



module.exports = globalError;