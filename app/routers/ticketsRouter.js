const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get("/", redis.allData("getAllTickets"), ticketsController.findAll)
  .get("/:id", redis.oneData("getTicketsById"), ticketsController.findOne)
  .post("/", auth.verification(), ticketsController.create)
  .put("/:id", auth.verification(), ticketsController.update)
  .delete("/:id", auth.verification(), ticketsController.delete);

module.exports = router;
