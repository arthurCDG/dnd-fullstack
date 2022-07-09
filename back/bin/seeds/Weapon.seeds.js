require("./../../db/index");

const WeaponModel = require("./../../models/Weapon.model");
const DieModel = require("./../../models/Die.model");

const weapons = [
  {
    name: "Ancient short bow",
    actionDice: [], // "yellowDie", "orangeDie"
  },
  {
    name: "Balanced throwing dagger",
    actionDice: [], // "yellowDie", "orangeDie"
  },
  {
    name: "Crossbow of faith",
    actionDice: [], // "yellowDie", "orangeDie"
  },
  {
    name: "Dagger",
    actionDice: [], // "yellowDie", "orangeDie"
  },
  {
    name: "Death Bringer",
    actionDice: [], // "redDie", "purpleDie"
  },
  {
    name: "Dragon's Fury",
    actionDice: [], // "redDie", "purpleDie"
  },
  {
    name: "Fantomatic sword",
    actionDice: [], // "redDie", "orangeDie"
  },
  {
    name: "Hammer of Submission",
    actionDice: [], // "orangeDie", "purpleDie"
  },
  {
    name: "Heavy club",
    actionDice: [], // "orangeDie", "orangeDie"
  },
  {
    name: "Large sword",
    actionDice: [], // "orangeDie", "orangeDie"
  },
  {
    name: "Lich ward",
    actionDice: [], // "redDie", "purpleDie"
  },
  {
    name: "Short axe",
    actionDice: [], // "yellowDie", "orangeDie"
  },
];

(async function insertWeapons() {
  try {
    await WeaponModel.deleteMany(); // empty the Weapon db collection

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

    weapons[0].actionDice.push(dice[0]._id);
    weapons[0].actionDice.push(dice[1]._id);
    weapons[1].actionDice.push(dice[0]._id);
    weapons[1].actionDice.push(dice[1]._id);
    weapons[2].actionDice.push(dice[0]._id);
    weapons[2].actionDice.push(dice[1]._id);
    weapons[3].actionDice.push(dice[0]._id);
    weapons[3].actionDice.push(dice[1]._id);
    weapons[4].actionDice.push(dice[2]._id);
    weapons[4].actionDice.push(dice[3]._id);
    weapons[5].actionDice.push(dice[2]._id);
    weapons[5].actionDice.push(dice[3]._id);
    weapons[6].actionDice.push(dice[2]._id);
    weapons[6].actionDice.push(dice[1]._id);
    weapons[7].actionDice.push(dice[1]._id);
    weapons[7].actionDice.push(dice[3]._id);
    weapons[8].actionDice.push(dice[1]._id);
    weapons[8].actionDice.push(dice[1]._id);
    weapons[9].actionDice.push(dice[1]._id);
    weapons[9].actionDice.push(dice[1]._id);
    weapons[10].actionDice.push(dice[2]._id);
    weapons[10].actionDice.push(dice[3]._id);
    weapons[11].actionDice.push(dice[0]._id);
    weapons[11].actionDice.push(dice[1]._id);

    const inserted = await WeaponModel.insertMany(weapons);
    console.log(`seed weapons done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
