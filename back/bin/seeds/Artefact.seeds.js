require("./../../db/index");

const ArtefactModel = require("./../../models/Artefact.model");

const artefacts = [
  {
    name: "True Seeing Orb",
    description: "",
    effect: "",
    img: "./../img/game_cards/true_seeing_orb.png",
  },
  {
    name: "Elven Mirror Shield",
    description: "",
    effect: "",
    img: "./../img/game_cards/elven-mirror-shield.png",
  },
  {
    name: "Moshuga Turtle Shield",
    description: "",
    effect: "",
    img: "",
  },
  {
    name: "Olidammaras Amulet",
    description: "",
    effect: "",
    img: "./../img/game_cards/olidammaras-amulet.png",
  },
  {
    name: "Summoners Horn",
    description: "",
    effect: "",
    img: "./../img/game_cards/summoners-horn.png",
  },
  {
    name: "Yondalla Necklace",
    description: "",
    effect: "",
    img: "./../img/game_cards/summoners-horn.png",
  },
];

ArtefactModel.insertMany(artefacts)
  .then((x) => console.log(`Succes, inserted ${x.count} artefacts`))
  .then((x) => process.exit())
  .catch((err) => console.log(err));
