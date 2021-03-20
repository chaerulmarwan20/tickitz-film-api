const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

router
  .get("/", paymentsController.findAll)
  .get("/:id", paymentsController.findOne)
  .post("/", paymentsController.create)
  .put("/:id", paymentsController.update)
  .delete("/:id", paymentsController.delete);

module.exports = router;
