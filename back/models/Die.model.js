const { Schema, model } = require("mongoose");

const dieSchema = new Schema({
  name: String,
  faces: [],
});

const Dice = model("Dice", dieSchema);

module.exports = Dice;
