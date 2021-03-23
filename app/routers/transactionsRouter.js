const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllTransactions"),
    transactionsController.findAll
  )
  .get(
    "/:id",
    auth.verification(),
    redis.oneData("getTransactionsById"),
    transactionsController.findOne
  )
  .get(
    "/users/:id",
    redis.allData("getAllTransactionsUsers"),
    transactionsController.findUsersTransactions
  )
  .post("/", auth.verification(), transactionsController.create)
  .put("/:id", auth.verification(), transactionsController.update)
  .delete("/:id", auth.verification(), transactionsController.delete);

module.exports = router;
