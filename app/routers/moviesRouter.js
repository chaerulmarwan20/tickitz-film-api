const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router
  .get("/", moviesController.findAll)
  .get("/realesed", moviesController.findAllRealesed)
  .post("/search-realese", moviesController.searchRealesed)
  .post("/search-not-realese", moviesController.searchNotRealesed)
  .get("/:id", moviesController.findOne)
  .post("/", moviesController.create)
  .put("/:id", moviesController.update)
  .delete("/:id", moviesController.delete);

module.exports = router;
