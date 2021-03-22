const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");
const multer = require("../middlewares/multer");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allPayments, paymentsController.findAll)
  .get("/:id", paymentsController.findOne)
  .post("/", multer.uploadImage.single("image"), paymentsController.create)
  .put("/:id", multer.uploadImage.single("image"), paymentsController.update)
  .delete("/:id", paymentsController.delete);

module.exports = router;
