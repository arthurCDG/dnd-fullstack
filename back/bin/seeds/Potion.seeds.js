require("./../../config/index");
const PotionModel = require("./../../models/Potion.model");

const potions = [
    {
        name: "Lesser potion of restauration",
        action: "Restore up to 3 spell points",
        img: "",
    },
    {   
        name: "Potion of Olidammara's insight",
        action: "Trap has no effect",
        img: "",
    },
    { 
        name: "Potion of the forceful hand",
        action: "Move any monster anywhere in the room",
        img: "",
    },
]

PotionModel.insertMany(potions)
    .then(console.log("Succes, inserted potions"))
    .catch(err => console.log(err))