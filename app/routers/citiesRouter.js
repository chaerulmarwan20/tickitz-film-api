const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get("/", redis.allData("getAllCities"), citiesController.findAll)
  .get("/:id", redis.oneData("getCitiesById"), citiesController.findOne)
  .post("/", auth.verification(), citiesController.create)
  .put("/:id", auth.verification(), citiesController.update)
  .delete("/:id", auth.verification(), citiesController.delete);

module.exports = router;
