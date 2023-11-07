const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config()

const auth = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) {
      res.status(401).send("Invalid request. You are not authenticated yet.");
    } else {
      req.body.email = decoded.email;
      req.body.password = decoded.password;
      next();
    }
  });
};

module.exports = auth;
