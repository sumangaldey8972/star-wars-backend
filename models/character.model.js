const { Schema, model } = require("mongoose");

const CharacterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  birth_year: { type: String, required: true },
  isFav: { type: Boolean, default: false }
});

const CharacterModel = model("character", CharacterSchema);

module.exports = CharacterModel;
