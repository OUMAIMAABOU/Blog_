const nodemailer = require("nodemailer");
module.exports= Transporter = nodemailer.createTransport(
{
  service:process.env.SERVICE,
  auth:
  {
    user:process.env.USER, 
    pass: process.env.PASSEMAIL, 
  },
});