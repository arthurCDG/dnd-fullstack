const { Schema, model } = require("mongoose");

const artefactSchema = new Schema({
  name: String,
  description: String,
  effect: String,
  img: String,
});

const Artefact = model("Artefact", artefactSchema);

module.exports = Artefact;
