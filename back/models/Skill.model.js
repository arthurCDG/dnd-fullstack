const { Schema, model } = require("mongoose");

const skillSchema = new Schema(
  {
    name: String,
    effect: String,
  }
);

const Skill = model("Skill", skillSchema);

module.exports = Skill;