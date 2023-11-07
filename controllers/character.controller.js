const CharacterModel = require("../models/character.model");

const createCharacter = async (req, res) => {
  console.log(req.body)
  try {
    const { name, gender, birth_year } = req.body;
    const character = await CharacterModel.create({ name, gender, birth_year });
    res.json({ status: true, message: `${req.body.name} is added as Favourite`, characterDetails: character });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getCharacters = async (req, res) => {
  try {
    const characters = await CharacterModel.find();
    res.json({ status: true, message: "Success", characterDetails: characters });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createCharacter,
  getCharacters,
};
