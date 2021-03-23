const express = require("express");
const router = express.Router();
const cinemasController = require("../controllers/cinemasController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get("/", redis.allData("getAllCinemas"), cinemasController.findAll)
  .get("/:id", redis.oneData("getCinemasById"), cinemasController.findOne)
  .post(
    "/",
    auth.verification(),
    multer.uploadImage.single("image"),
    cinemasController.create
  )
  .put(
    "/:id",
    auth.verification(),
    multer.uploadImage.single("image"),
    cinemasController.update
  )
  .delete("/:id", auth.verification(), cinemasController.delete);

module.exports = router;
