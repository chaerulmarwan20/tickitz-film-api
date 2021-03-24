const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/citiesController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllCities"),
    citiesController.findAll
  )
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getCitiesById"),
    citiesController.findOne
  )
  .post("/", auth.verification(), auth.isAdmin(), citiesController.create)
  .put("/:id", auth.verification(), auth.isAdmin(), citiesController.update)
  .delete("/:id", auth.verification(), auth.isAdmin(), citiesController.delete);

module.exports = router;
