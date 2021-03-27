const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllMovies"),
    moviesController.findAll
  )
  .get(
    "/realesed",
    redis.allData("getAllMoviesRealesed"),
    moviesController.findAllRealesed
  )
  .get(
    "/is-realese",
    redis.allData("isMoviesRealesed"),
    moviesController.isRealesed
  )
  .get(
    "/is-not-realese",
    redis.allData("isMoviesNotRealesed"),
    moviesController.isNotRealesed
  )
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getMoviesById"),
    moviesController.findOne
  )
  .post(
    "/",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    moviesController.create
  )
  .put(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    moviesController.update
  )
  .delete("/:id", auth.verification(), auth.isAdmin(), moviesController.delete);

module.exports = router;
