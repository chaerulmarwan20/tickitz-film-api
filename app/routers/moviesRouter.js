const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allMovies, moviesController.findAll)
  .get("/realesed", moviesController.findAllRealesed)
  .post("/search-realese", moviesController.searchRealesed)
  .post("/search-not-realese", moviesController.searchNotRealesed)
  .get("/:id", moviesController.findOne)
  .post("/", multer.uploadImage.single("image"), moviesController.create)
  .put("/:id", multer.uploadImage.single("image"), moviesController.update)
  .delete("/:id", moviesController.delete);

module.exports = router;
