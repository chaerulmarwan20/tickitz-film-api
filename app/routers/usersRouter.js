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
    auth.isAdmin(),
    redis.allData("getAllUsers"),
    usersController.findAll
  )
  .get("/find-one", auth.verification(), usersController.findOne)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .get("/auth/verify", usersController.verify)
  .put("/moviegoers", auth.verification(), usersController.moviegoers)
  .post("/auth/login", usersController.login)
  .post("/auth/check-email", usersController.checkEmail)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/auth/reset-password", usersController.resetPassword)
  .put("/:id", multer.uploadImage.single("image"), usersController.update)
  .delete("/:id", auth.verification(), auth.isAdmin(), usersController.delete);

module.exports = router;
