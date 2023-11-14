const Transporter=require('../Config/Email')
exports.sendEmail = (email,activemail,username,msg,route)=>
{
  Transporter.SendMail(
  {
    from: process.env.USER, 
    to: email, 
    subject: "confirmer email",  
    html: "<h3>HELLO " + username+'?</h3><p> Please click <a href="http://localhost:3000'+route+activemail+ '"> here </a> '+msg+'</p>',
  },
  (error,info)=>
  {
    if(error) console.log(error);
    else console.log("send");    
  })
}