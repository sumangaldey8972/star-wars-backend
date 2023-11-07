const express = require("express");
const {
  createCharacter,
  getCharacters,
} = require("../controllers/character.controller");

const app = express.Router();

app.post("/", createCharacter);
app.get("/", getCharacters);

module.exports = app;
