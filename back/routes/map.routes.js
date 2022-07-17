const router = require("express").Router();
const mapJSONSettings = require("./../square-settings/dungeon-8x10-room-settings.json");

router.get("/", (req, res, next) => {
  return res.json(mapJSONSettings);
});

module.exports = router;
