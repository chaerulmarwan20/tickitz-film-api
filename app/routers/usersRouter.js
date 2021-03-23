const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllUsers"),
    usersController.findAll
  )
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getUsersById"),
    usersController.findOne
  )
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .get("/auth/verify", usersController.verify)
  .put("/moviegoers", usersController.moviegoers)
  .post("/auth/login", usersController.login)
  .put("/:id", multer.uploadImage.single("image"), usersController.update)
  .delete("/:id", auth.verification(), usersController.delete);

module.exports = router;
