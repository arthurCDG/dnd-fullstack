require("./../../db/index");

const HeroModel = require("./../../models/Hero.model");
const SkillModel = require("./../../models/Skill.model");
const WeaponModel = require("./../../models/Weapon.model");
const SpellModel = require("./../../models/Spell.model");
const ArtefactModel = require("./../../models/Artefact.model");

const heroes = [
  {
    name: "Jozian",
    maxHealth: 9,
    health: 9,
    mana: 7,
    skills: [], // "dismiss_undeads"
    maxSteps: 5,
    stepsCount: 5,
    attackCount: 1,
    maxAttackCount: 1,
    healCount: 1,
    maxHealCount: 1,
    shield: 2,
    weapon: null, // "crossbow_of_faith"
    spell: null, // "ultimate_restoration_spell"
    inventory: [],
    inventoryCapacity: 5,
    isAlive: true,
  },
  {
    name: "Regdar",
    health: 15,
    maxHealth: 15,
    mana: null,
    skills: [],
    maxSteps: 4,
    stepsCount: 4,
    attackCount: 1,
    maxAttackCount: 1,
    healCount: 0,
    maxHealCount: 0,
    shield: 2,
    weapon: null, // "large_sword"
    spell: null,
    inventory: [],
    inventoryCapacity: 4,
    isAlive: true,
  },
  {
    name: "Lidda",
    health: 9,
    maxHealth: 9,
    mana: 4,
    skills: [], // "sneaky_attack", "look_for_and_dismiss_traps"
    maxSteps: 6,
    stepsCount: 6,
    attackCount: 1,
    maxAttackCount: 1,
    healCount: 1,
    maxHealCount: 1,
    shield: 2,
    weapon: null, // "balanced_throwing_dagger"
    spell: null,
    inventory: [], // "yondalla_necklace"
    inventoryCapacity: 4,
    isAlive: true,
  },
  {
    name: "Mialye",
    health: 9,
    maxHealth: 9,
    mana: 9,
    skills: [],
    maxSteps: 5,
    stepsCount: 5,
    attackCount: 1,
    maxAttackCount: 1,
    healCount: 1,
    maxHealCount: 1,
    shield: 2,
    weapon: null, //  "ancient_short_bow"
    spell: null, // "magic_projectile"
    inventory: [],
    inventoryCapacity: 5,
    isAlive: true,
  },
];

(async function insertHeroes() {
  try {
    await HeroModel.deleteMany(); // empty the Hero db collection

    const skills = await Promise.all([
      SkillModel.findOne({ name: "Dismiss Undeads" }),
      SkillModel.findOne({ name: "Sneaky Attack" }),
      SkillModel.findOne({ name: "Look for traps" }),
    ]);

    heroes[0].skills.push(skills[0]._id);
    heroes[2].skills.push(skills[1]._id);
    heroes[2].skills.push(skills[2]._id);

    const Weapons = await Promise.all([
      WeaponModel.findOne({ name: "Crossbow of faith" }),
      WeaponModel.findOne({ name: "Large sword" }),
      WeaponModel.findOne({ name: "Balanced throwing dagger" }),
      WeaponModel.findOne({ name: "Ancient short bow" }),
    ]);

    heroes[0].weapon = Weapons[0]._id;
    heroes[1].weapon = Weapons[1]._id;
    heroes[2].weapon = Weapons[2]._id;
    heroes[3].weapon = Weapons[3]._id;

    const Spells = await Promise.all([
      SpellModel.findOne({ name: "Ultimate restoration spell" }),
      SpellModel.findOne({ name: "Magic projectile" }),
    ]);

    heroes[0].spell = Spells[0]._id;
    heroes[3].spell = Spells[1]._id;

    const Artefacts = await Promise.all([
      ArtefactModel.findOne({ name: "Yondalla Necklace" }),
    ]);

    heroes[2].inventory.push(Artefacts[0]._id);

    const inserted = await HeroModel.insertMany(heroes);
    console.log(`seed heroes done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
