const { Schema, model } = require("mongoose");

const spellSchema = new Schema(
  {
    name: String,
    effect: String,
  }
);

const Spell = model("Spell", spellSchema);

module.exports = Spell;