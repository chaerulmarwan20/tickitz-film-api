const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const redis = require("../middlewares/redis");

router
  .get("/", redis.allTransactions, transactionsController.findAll)
  .get("/successed", transactionsController.findAllSuccessed)
  .get("/search", transactionsController.search)
  .get("/:id", transactionsController.findOne)
  .get("/users/:id", transactionsController.findUsersTransactions)
  .post("/", transactionsController.create)
  .put("/:id", transactionsController.update)
  .delete("/:id", transactionsController.delete);

module.exports = router;
