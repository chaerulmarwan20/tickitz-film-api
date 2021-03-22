const express = require("express");
const router = express.Router();
const cinemasController = require("../controllers/cinemasController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allCinemas, cinemasController.findAll)
  .get("/:id", cinemasController.findOne)
  .post("/", multer.uploadImage.single("image"), cinemasController.create)
  .put("/:id", multer.uploadImage.single("image"), cinemasController.update)
  .delete("/:id", cinemasController.delete);

module.exports = router;
