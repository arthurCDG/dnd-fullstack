require("./../../config/index");
const WeaponModel = require("./../../models/Weapon.model");

const weapons = [
    {
        name: "Ancient short bow",
        actionDice: ["yellowDie", "orangeDie"],
    },
    {
        name: "Balanced throwing dagger",
        actionDice: ["yellowDie", "orangeDie"],
    },
    {
        name: "Crossbow of faith",
        actionDice: ["yellowDie", "orangeDie"],
    },
    {
        name: "Dagger",
        actionDice: ["yellowDie", "orangeDie"],
    },
    {
        name: "Death Bringer",
        actionDice: ["redDie", "purpleDie"],
    },
    {
        name: "Dragon's Fury",
        actionDice: ["redDie", "purpleDie"],
    },
    {
        name: "Fantomatic sword",
        actionDice: ["redDie", "orangeDie"],
    },
    {
        name: "Hammer of Submission",
        actionDice: ["orangeDie", "purpleDie"],
    },
    {
        name: "Heavy club",
        actionDice: ["orangeDie", "orangeDie"],
    },
    {
        name: "Large sword",
        actionDice: ["orangeDie", "orangeDie"],
    },
    {
        name: "Lich ward",
        actionDice: ["redDie", "purpleDie"],
    },
    {
        name: "Magic projectile",
        actionDice: ["yellowDie", "orangeDie"],
    },
    {
        name: "Short axe",
        actionDice: ["yellowDie", "orangeDie"],
    },
]

WeaponModel.insertMany(weapons)
    .then(console.log("Succes, inserted weapons"))
    .catch(err => console.log(err))