const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allData("getAllTickets"), ticketsController.findAll)
  .get("/:id", redis.oneData("getTicketsById"), ticketsController.findOne)
  .post("/", ticketsController.create)
  .put("/:id", ticketsController.update)
  .delete("/:id", ticketsController.delete);

module.exports = router;
