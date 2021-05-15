const express = require("express");
const router = express.Router();
const cinemasController = require("../controllers/cinemasController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get("/", cinemasController.findAll)
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getCinemasById"),
    cinemasController.findOne
  )
  .post(
    "/",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    cinemasController.create
  )
  .put(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    cinemasController.update
  )
  .delete(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    cinemasController.delete
  );

module.exports = router;
