require("./../../db/index");

const PotionModel = require("./../../models/Potion.model");

const potions = [
  {
    name: "Lesser potion of restauration",
    effect: "Restore up to 3 spell points",
    img: "",
  },
  {
    name: "Potion of Olidammara's insight",
    effect: "Trap has no effect",
    img: "",
  },
  {
    name: "Potion of the forceful hand",
    effect: "Move any monster anywhere in the room",
    img: "",
  },
];

PotionModel.insertMany(potions)
  .then(console.log("Succes, inserted potions"))
  .then((x) => process.exit())
  .catch((err) => console.log(err));
