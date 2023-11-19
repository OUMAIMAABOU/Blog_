// // const Transporter=require('../Config/Email')
// const nodemailer = require("nodemailer");
// Transporter = ()=>nodemailer.createTransport(
// {
//   service:process.env.SERVICE,
//   auth:
//   {
//     user:process.env.USER,
//     pass: process.env.PASSEMAIL,
//   },
// });
// exports.sendEmail = (email,activemail,username,msg,route)=>
// {
//   Transporter.SendMail(
//   {
//     from: process.env.USER,
//     to: email,
//     subject: "confirmer email",
//     html: `<h3>HELLO ${username}?</h3><p> Please click <a href="http://localhost:3000${route}${activemail} > here </a> ${msg}</p>`,
//   },
//   (error,info)=>
//   {
//     error? console.log(error):console.log("send");
//   })
// }

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSEMAIL,
  },
});
exports.sendEmail = (email, activemail, username, msg, route) => {
  transporter.sendMail(
    {
      from: process.env.USER,
      to: email,
      subject: "confirmer email",
      html:
        "<h3>HELLO " +
        username +
        '?</h3><p> Please click <a href="http://localhost:3000' +
        route +
        activemail +
        '"> here </a> ' +
        msg +
        "</p>",
    },
    (error, info) => {
      if (error) console.log(error);
      else console.log(" send");
    }
  );
};
