const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config()

const connect = () => {
  return mongoose.connect(
    `${process.env.MONGO_URL}`
  );
};

module.exports = connect;
