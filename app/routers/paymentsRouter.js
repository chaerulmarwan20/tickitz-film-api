const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get("/", redis.allData("getAllPayments"), paymentsController.findAll)
  .get("/:id", redis.oneData("getPaymentsById"), paymentsController.findOne)
  .post(
    "/",
    auth.verification(),
    multer.uploadImage.single("image"),
    paymentsController.create
  )
  .put(
    "/:id",
    auth.verification(),
    multer.uploadImage.single("image"),
    paymentsController.update
  )
  .delete("/:id", auth.verification(), paymentsController.delete);

module.exports = router;
