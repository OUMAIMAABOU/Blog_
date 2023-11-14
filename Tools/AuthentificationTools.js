const User=require('../Models/UsersModel')
// method : put => url : api/auth/configiration/:token =>acces : Public
exports.VerificationToken = (req, res) => {
  User.updateOne({ token: req.params.token }, { is_active: true })
    .then((result) => {res.json(result)})
    .catch((e) => {console.log(e);  });
};
// function pour create token
exports.GererateAccessToken = (user, expirestime) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: expirestime });
};
// function the validation email
exports.verificationEmail = (email) => {
  return email.match(/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/);
};
