require("./../../config/index");
const SpellModel = require("./../../models/Spell.model");

const spells = [
    {
        name: "Ultimate restoration spell",
        cost: 3,
        actionDice: ["redDie", "purpleDie"],
    },
    {   
        name: "Yondalla Necklace",
        cost: 4,
        actionDice: ["purpleDie", "purpleDie"],
    },
    { 
        name: "Magic projectile",
        cost: 2,
        actionDice: ["orangeDie", "orangeDie"],
    },
]

SpellModel.insertMany(spells)
    .then(console.log("Succes, inserted spells"))
    .catch(err => console.log(err))