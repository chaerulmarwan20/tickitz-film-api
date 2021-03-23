const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

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
  .post(
    "/",
    auth.verification(),
    multer.uploadImage.single("image"),
    moviesController.create
  )
  .put(
    "/:id",
    auth.verification(),
    multer.uploadImage.single("image"),
    moviesController.update
  )
  .delete("/:id", auth.verification(), moviesController.delete);

module.exports = router;
