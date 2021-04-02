const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllTickets"),
    ticketsController.findAll
  )
  .get("/order", auth.verification(), ticketsController.findAllTicketsOrder)
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getTicketsById"),
    ticketsController.findOne
  )
  .post("/", auth.verification(), auth.isAdmin(), ticketsController.create)
  .put("/:id", auth.verification(), auth.isAdmin(), ticketsController.update)
  .delete(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    ticketsController.delete
  );

module.exports = router;
