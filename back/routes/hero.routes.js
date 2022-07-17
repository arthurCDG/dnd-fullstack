const router = require("express").Router();
const HeroModel = require("./../models/Hero.model");

router.get("/", async (req, res, next) => {
  try {
    const test = await HeroModel.find();
    console.log(test);
    return test;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
