const globalError = require("../Middlewares/ErreurMiddelware");
const User = require("../Models/UsersModel");
const Role = require("../Models/RoleModel");
const SendMail = require("../Tools/EmailTools");
const { verificationEmail,GererateAccessToken } = require("../Tools/AuthentificationTools");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const localstorage = require("local-storage");
// method : post => url : api/auth/Register =>acces : Public
exports.Register = async (req, res) => {
  const { body } = req;
  if (!body)
    throw new CatchError(
      `Veuillez remplir tous les champs, s'il vous plaît.`,
      400
    );
  try {
    if (verificationEmail(body.email)) {
      const findrole = await Role.findOne({ role: "Client" });
      body.password = await bcryptjs.hash(body.password, 10);
      body.token = crypto.randomBytes(32).toString("hex");
      body.roleid = findrole._id;
      await User.create({ ...body });
      res.json("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >");
      SendMail(body.email,body.token,body.name, "to activate your account", "/configiration/");
    } else res.status(400).json("invalide mail");
  } catch (e) {
    return res.status(400).send({ message: e });
  }
};
// method : git => url : api/auth/login =>acces : Public

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(400).json("can't find this user");
    else {
      const payload = { userId: user._id, username: user.name };
      if(await bcryptjs.compare(req.body.password, user.password)) {
        localstorage("token",GererateAccessToken({payload},"120m"));
        res.status(200).json({ token: localstorage("token"), username: users.fullname });
      } else res.status(400).json("password invalide");
    }
  } catch (e) {
    return res.status(400).json(e.message);
  }
  };
