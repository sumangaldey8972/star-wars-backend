const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
dotenv.config()

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let isUser = await UserModel.findOne({ email })
    if (isUser) {
      if (password === isUser.password) {
        let token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        res.json({ status: true, message: "Login Successful", token });
      } else {
        res
          .status(404)
          .json({ message: "Incorrect Password" });
      }
    } else {
      res
        .status(404)
        .json({ message: "Invalid Credentials, please try again." });
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  loginUser,
};
