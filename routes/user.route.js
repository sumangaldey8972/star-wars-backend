const express = require("express");
const { loginUser } = require("../controllers/user.controller");

const app = express.Router();

app.post("/login", loginUser);
module.exports = app;
