const { Schema, model } = require("mongoose");

const potionSchema = new Schema({
  name: String,
  effect: String,
  img: String,
});

const Potion = model("Potion", potionSchema);

module.exports = Potion;
