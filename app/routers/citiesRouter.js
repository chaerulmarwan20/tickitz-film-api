const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allCities, citiesController.findAll)
  .get("/:id", citiesController.findOne)
  .post("/", citiesController.create)
  .put("/:id", citiesController.update)
  .delete("/:id", citiesController.delete);

module.exports = router;
