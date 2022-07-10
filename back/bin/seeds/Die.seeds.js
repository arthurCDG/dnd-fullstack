require("./../../db/index");

const DieModel = require("./../../models/Die.model");

const dice = [
  {
    name: "yellowDie",
    faces: [
      { number: 0, img: "./../img/dice-images/0_0.png" },
      { number: 1, img: "./../img/dice-images/0_1.png" },
      { number: 0, img: "./../img/dice-images/0_2.png" },
      { number: 1, img: "./../img/dice-images/0_3.png" },
      { number: 1, img: "./../img/dice-images/0_4.png" },
      { number: 1, img: "./../img/dice-images/0_5.png" },
    ],
  },
  {
    name: "orangeDie",
    faces: [
      { number: 1, img: "./../img/dice-images/1_0.png" },
      { number: 2, img: "./../img/dice-images/1_1.png" },
      { number: 1, img: "./../img/dice-images/1_2.png" },
      { number: 2, img: "./../img/dice-images/1_3.png" },
      { number: 1, img: "./../img/dice-images/1_4.png" },
      { number: 1, img: "./../img/dice-images/1_5.png" },
    ],
  },
  {
    name: "redDie",
    faces: [
      { number: 3, img: "./../img/dice-images/3_0.png" },
      { number: 0, img: "./../img/dice-images/3_1.png" },
      { number: 3, img: "./../img/dice-images/3_2.png" },
      { number: 2, img: "./../img/dice-images/3_3.png" },
      { number: 2, img: "./../img/dice-images/3_4.png" },
      { number: 2, img: "./../img/dice-images/3_5.png" },
    ],
  },
  {
    name: "purpleDie",
    faces: [
      { number: 2, img: "./../img/dice-images/2_0.png" },
      { number: 3, img: "./../img/dice-images/2_1.png" },
      { number: 3, img: "./../img/dice-images/2_2.png" },
      { number: 3, img: "./../img/dice-images/2_3.png" },
      { number: 2, img: "./../img/dice-images/2_4.png" },
      { number: 2, img: "./../img/dice-images/2_5.png" },
    ],
  },
  {
    name: "starDie",
    faces: [
      { number: 1, img: "./../img/dice-images/4_0.png" },
      { number: 0, img: "./../img/dice-images/4_1.png" },
      { number: 1, img: "./../img/dice-images/4_2.png" },
      { number: 0, img: "./../img/dice-images/4_3.png" },
      { number: 1, img: "./../img/dice-images/4_4.png" },
      { number: 0, img: "./../img/dice-images/4_5.png" },
    ],
  },
  {
    name: "discoverTrapsDie",
    faces: [
      { number: 1, img: "./../img/dice-images/7_0.png" },
      { number: 2, img: "./../img/dice-images/7_1.png" },
      { number: 0, img: "./../img/dice-images/7_2.png" },
      { number: 0, img: "./../img/dice-images/7_5.png" },
      { number: 1, img: "./../img/dice-images/7_4.png" },
      { number: 0, img: "./../img/dice-images/7_5.png" },
    ],
  },
  {
    name: "dismissTrapsDie",
    faces: [
      { number: 1, img: "./../img/dice-images/6_0.png" },
      { number: 0, img: "./../img/dice-images/6_1.png" },
      { number: 1, img: "./../img/dice-images/6_2.png" },
      { number: 1, img: "./../img/dice-images/6_5.png" },
      { number: 1, img: "./../img/dice-images/6_4.png" },
      { number: 1, img: "./../img/dice-images/6_5.png" },
    ],
  },
  {
    name: "dismissUndeadsDie",
    faces: [
      { number: 0, img: "./../img/dice-images/5_0.png" },
      { number: 2, img: "./../img/dice-images/5_1.png" },
      { number: 1, img: "./../img/dice-images/5_2.png" },
      { number: 3, img: "./../img/dice-images/5_5.png" },
      { number: 0, img: "./../img/dice-images/5_4.png" },
      { number: 0, img: "./../img/dice-images/5_5.png" },
    ],
  },
];

(async function insertDice() {
  try {
    const inserted = await DieModel.insertMany(dice);
    console.log(`seed weapons done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
