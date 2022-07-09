const { Schema, model } = require("mongoose");

const artefactSchema = new Schema(
  {
    name: String,
    effect: String,
  }
);

const Artefact = model("Artefact", artefactSchema);

module.exports = Artefact;