const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allData("getAllCities"), citiesController.findAll)
  .get("/:id", redis.oneData("getCitiesById"), citiesController.findOne)
  .post("/", citiesController.create)
  .put("/:id", citiesController.update)
  .delete("/:id", citiesController.delete);

module.exports = router;
