require("./../../config/index");
const ArtefactModel = require("./../../models/Artefact.model");

const artefacts = [
    {
        name: "True Seeing Orb",
        action: () => {
          document.querySelectorAll(".active-hole-trap").forEach((trap) => {
            trap.classList.add("visible-trap");
          });
          document.querySelectorAll(".active-fireball-trap").forEach((trap) => {
            trap.classList.add("visible-trap");
          });
          document.querySelectorAll(".active-poison-trap").forEach((trap) => {
            trap.classList.add("visible-trap");
          });
        },
        img: "./../img/game_cards/true_seeing_orb.png",
    },
    {
        name: "Elven Mirror Shield",
        action: "",
        img: "./../img/game_cards/elven-mirror-shield.png",
    },
    {
        name: "Moshuga Turtle Shield",
        action: "",
        img: "",
    },
    {
        name: "Olidammaras Amulet",
        action: "",
        img: "./../img/game_cards/olidammaras-amulet.png"
    },
    {
        name: "Summoners Horn",
        action: "",
        img: "./../img/game_cards/summoners-horn.png"
    }
]

ArtefactModel.insertMany(artefacts)
    .then(console.log("Succes, inserted artefacts"))
    .catch(err => console.log(err))