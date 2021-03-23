const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allData("getAllTransactions"), transactionsController.findAll)
  .get(
    "/:id",
    redis.oneData("getTransactionsById"),
    transactionsController.findOne
  )
  .get(
    "/users/:id",
    redis.allData("getAllTransactionsUsers"),
    transactionsController.findUsersTransactions
  )
  .post("/", transactionsController.create)
  .put("/:id", transactionsController.update)
  .delete("/:id", transactionsController.delete);

module.exports = router;
