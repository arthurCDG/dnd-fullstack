const router = require("express").Router();
const authRoutes = require("./auth.routes");
const heroRoutes = require("./hero.routes");
const mapRoutes = require("./map.routes");

// Alternate routes
router.use("/auth", authRoutes);
router.use("/heroes", heroRoutes);
router.use("/map", mapRoutes);

// Main route
router.get("/", (req, res, next) => {
  res.json("WELCOME PAGE");
});

module.exports = router;
