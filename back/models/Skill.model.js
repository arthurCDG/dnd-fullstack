const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  name: String,
  cost: Number,
  actionDice: [],
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
