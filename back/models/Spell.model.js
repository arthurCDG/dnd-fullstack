const { Schema, model } = require("mongoose");

const spellSchema = new Schema(
  {
    name: String,
    cost: String,
    actionDice: {
        type: Schema.Types.ObjectId,
        ref: 'Dice'
    }
  }
);

const Spell = model("Spell", spellSchema);

module.exports = Spell;