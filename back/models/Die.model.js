const { Schema, model } = require("mongoose");

const dieSchema = new Schema(
  {
    name: String,
    faces: [
        {  
            number: Number,
            img: String,
        }
    ]
  }
);

const Dice = model("Dice", dieSchema);

module.exports = Dice;