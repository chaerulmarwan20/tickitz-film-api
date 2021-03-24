const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllPayments"),
    paymentsController.findAll
  )
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getPaymentsById"),
    paymentsController.findOne
  )
  .post(
    "/",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    paymentsController.create
  )
  .put(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    multer.uploadImage.single("image"),
    paymentsController.update
  )
  .delete(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    paymentsController.delete
  );

module.exports = router;
