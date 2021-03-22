const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allTickets, ticketsController.findAll)
  .get("/:id", ticketsController.findOne)
  .post("/", ticketsController.create)
  .put("/:id", ticketsController.update)
  .delete("/:id", ticketsController.delete);

module.exports = router;
