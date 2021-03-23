const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allData("getAllUsers"), usersController.findAll)
  .get("/test", auth.verification(), usersController.success)
  .get("/:id", redis.oneData("getUsersById"), usersController.findOne)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .put("/moviegoers", usersController.moviegoers)
  .post("/login", usersController.login)
  .put("/:id", multer.uploadImage.single("image"), usersController.update)
  .delete("/:id", usersController.delete);

module.exports = router;
