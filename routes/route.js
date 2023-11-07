const authMiddleware = require("../middlewares/auth.middleware");
const userRouter = require("./user.route");
const characterRouter = require("./character.route");
const express = require("express");

const app = express();

app.use("/user", userRouter);
app.use(authMiddleware);
app.use("/character", characterRouter);

module.exports = app;
