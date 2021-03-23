const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allData("getAllMovies"), moviesController.findAll)
  .get(
    "/realesed",
    redis.allData("getAllMoviesRealesed"),
    moviesController.findAllRealesed
  )
  .get(
    "/search-realese",
    redis.allData("searchMoviesRealesed"),
    moviesController.searchRealesed
  )
  .get(
    "/search-not-realese",
    redis.allData("searchMoviesNotRealesed"),
    moviesController.searchNotRealesed
  )
  .get("/:id", redis.oneData("getMoviesById"), moviesController.findOne)
  .post("/", multer.uploadImage.single("image"), moviesController.create)
  .put("/:id", multer.uploadImage.single("image"), moviesController.update)
  .delete("/:id", moviesController.delete);

module.exports = router;
