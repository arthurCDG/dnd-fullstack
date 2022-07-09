require("./../../config/index");
const SkillModel = require("./../../models/Skill.model");

const skills = [
    {
        name: "Dismiss Undeads",
        cost: 1,
        actionDice: ["dismissUndeadsDie"],
    },
    {
        name: "First Aid",
        cost: 2,
        actionDice: ["orangeDie", "orangeDie"],
    },
    {
        name: "Sneaky Attack",
        cost: 1,
        actionDice: ["purpleDie"],
    },
    {
        name: "Look for traps",
        cost: 0,
        actionDice: ["discoverTrapsDie"],
    },
    {
        name: "Dismiss traps",
        cost: 0,
        actionDice: ["dismissTrapsDie"],
    },
]

SkillModel.insertMany(skills)
    .then(console.log("Succes, inserted skills"))
    .catch(err => console.log(err))