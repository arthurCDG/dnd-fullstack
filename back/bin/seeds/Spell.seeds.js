require("./../../db/index");

const SpellModel = require("./../../models/Spell.model");
const DieModel = require("./../../models/Die.model");

const spells = [
  {
    name: "Ultimate restoration spell",
    cost: 3,
    actionDice: [], // "redDie", "purpleDie"
  },
  {
    name: "Yondalla Necklace",
    cost: 4,
    actionDice: [], // "purpleDie", "purpleDie"
  },
  {
    name: "Magic projectile",
    cost: 2,
    actionDice: [], // "orangeDie", "orangeDie"
  },
];

(async function insertSpells() {
  try {
    await SpellModel.deleteMany(); // empty the Spell db collection

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

    spells[0].actionDice.push(dice[2]._id);
    spells[0].actionDice.push(dice[3]._id);
    spells[1].actionDice.push(dice[3]._id);
    spells[1].actionDice.push(dice[3]._id);
    spells[2].actionDice.push(dice[1]._id);
    spells[2].actionDice.push(dice[1]._id);

    const inserted = await SpellModel.insertMany(spells);
    console.log(`seed spells done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
