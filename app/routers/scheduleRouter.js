const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");
const multer = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), scheduleController.findAll)
  .get("/time", auth.verification(), scheduleController.findAllTime)
  .get("/ticket", auth.verification(), scheduleController.findAllTicket)
  .get("/:id", auth.verification(), scheduleController.findOne)
  .post(
    "/ticket",
    auth.verification(),
    auth.isAdmin(),
    scheduleController.createTicket
  )
  .post(
    "/",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    scheduleController.create
  )
  .put(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    scheduleController.update
  )
  .delete(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    scheduleController.delete
  );

module.exports = router;
