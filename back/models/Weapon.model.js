const { Schema, model } = require("mongoose");

const weaponSchema = new Schema({
  name: String,
  actionDice: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dice",
    },
  ],
});

const Weapon = model("Weapon", weaponSchema);

module.exports = Weapon;
