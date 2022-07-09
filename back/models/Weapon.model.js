const { Schema, model } = require("mongoose");

const weaponSchema = new Schema(
  {
    name: String,
    effect: String,
  }
);

const Weapon = model("Weapon", weaponSchema);

module.exports = Weapon;