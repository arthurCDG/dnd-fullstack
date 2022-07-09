require("./../../db/index");

const SkillModel = require("./../../models/Skill.model");
const DieModel = require("./../../models/Die.model");

const skills = [
  {
    name: "Dismiss Undeads",
    cost: 1,
    actionDice: [], // dismissUndeadsDie
  },
  {
    name: "First Aid",
    cost: 2,
    actionDice: [], // "orangeDie", "orangeDie"
  },
  {
    name: "Sneaky Attack",
    cost: 1,
    actionDice: [], // "purpleDie"
  },
  {
    name: "Look for traps",
    cost: 0,
    actionDice: [], // "discoverTrapsDie"
  },
  {
    name: "Dismiss traps",
    cost: 0,
    actionDice: [], // "dismissTrapsDie"
  },
];

(async function insertSkills() {
  try {
    await SkillModel.deleteMany(); // empty the Weapon db collection

    const dice = await Promise.all([
      DieModel.findOne({ name: "yellowDie" }),
      DieModel.findOne({ name: "orangeDie" }),
      DieModel.findOne({ name: "redDie" }),
      DieModel.findOne({ name: "purpleDie" }),
      DieModel.findOne({ name: "starDie" }),
      DieModel.findOne({ name: "discoverTrapsDie" }),
      DieModel.findOne({ name: "dismissTrapsDie" }),
      DieModel.findOne({ name: "dismissUndeadsDie" }),
    ]);

    skills[0].actionDice.push(dice[7]._id);
    skills[1].actionDice.push(dice[1]._id);
    skills[1].actionDice.push(dice[1]._id);
    skills[2].actionDice.push(dice[3]._id);
    skills[3].actionDice.push(dice[5]._id);
    skills[4].actionDice.push(dice[6]._id);

    const inserted = await SkillModel.insertMany(skills);
    console.log(`seed skills done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
