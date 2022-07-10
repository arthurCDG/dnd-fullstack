require("./../../db/index");

const MonsterModel = require("./../../models/Monster.model");
const WeaponModel = require("./../../models/Weapon.model");

const monsters = [
  {
    name: "Gnoll",
    health: 5,
    mana: null,
    skills: null,
    shield: 1,
    maxSteps: 5,
    stepsCount: 5,
    weapon: null, // "short_axe"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Goblin",
    health: 4,
    mana: null,
    skills: null,
    shield: 1,
    maxSteps: 6,
    stepsCount: 6,
    weapon: null, // "dagger"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Minotaur",
    health: 8,
    mana: null,
    skills: null,
    shield: 2,
    maxSteps: 3,
    stepsCount: 3,
    weapon: null, // "heavy_club"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "LichKing",
    health: 10,
    mana: 10,
    skills: null,
    shield: 3,
    maxSteps: 5,
    stepsCount: 5,
    weapon: null, // "lich_ward"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Ogre",
    health: 7,
    mana: null,
    skills: null,
    shield: 2,
    maxSteps: 4,
    stepsCount: 4,
    weapon: null, // "heavy_club"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Skeleton",
    health: 5,
    mana: 5,
    skills: null,
    shield: 2,
    maxSteps: 5,
    stepsCount: 5,
    weapon: null, // "fantomatic_sword"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Slime",
    health: 12,
    mana: null,
    skills: null,
    shield: 0,
    maxSteps: 2,
    stepsCount: 2,
    weapon: null, // "fantomatic_sword"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Specter",
    health: 5,
    mana: 5,
    skills: null,
    shield: 2,
    maxSteps: 5,
    stepsCount: 5,
    weapon: null, // "fantomatic_sword"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Troll",
    health: 9,
    mana: null,
    skills: null,
    shield: 2,
    maxSteps: 3,
    stepsCount: 3,
    weapon: null, // "heavy_club"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
  {
    name: "Wyvern",
    health: 7,
    mana: 6,
    skills: null,
    shield: 2,
    maxSteps: 7,
    stepsCount: 7,
    weapon: null, // "heavy_club"
    isAlive: true,
    inventory: [],
    xPosition: null,
    yPosition: null,
  },
];

(async function insertMonsters() {
  try {
    await MonsterModel.deleteMany(); // empty the Monster db collection

    const Weapons = await Promise.all([
      WeaponModel.findOne({ name: "Short axe" }),
      WeaponModel.findOne({ name: "Dagger" }),
      WeaponModel.findOne({ name: "Heavy club" }),
      WeaponModel.findOne({ name: "Lich ward" }),
      WeaponModel.findOne({ name: "Fantomatic sword" }),
    ]);

    monsters[0].weapon = Weapons[0]._id;
    monsters[1].weapon = Weapons[1]._id;
    monsters[2].weapon = Weapons[2]._id;
    monsters[3].weapon = Weapons[3]._id;
    monsters[4].weapon = Weapons[2]._id;
    monsters[5].weapon = Weapons[4]._id;
    monsters[6].weapon = Weapons[4]._id;
    monsters[7].weapon = Weapons[4]._id;
    monsters[8].weapon = Weapons[2]._id;
    monsters[9].weapon = Weapons[2]._id;

    const inserted = await MonsterModel.insertMany(monsters);
    console.log(`seed monsters done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
