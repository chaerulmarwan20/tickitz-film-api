const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    auth.isAdmin(),
    redis.allData("getAllTransactions"),
    transactionsController.findAll
  )
  .get("/:id", auth.verification(), transactionsController.findOne)
  .get(
    "/users/:id",
    auth.verification(),
    transactionsController.findUsersTransactions
  )
  .post("/", auth.verification(), transactionsController.create)
  .put(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    transactionsController.update
  )
  .delete(
    "/:id",
    auth.verification(),
    auth.isAdmin(),
    transactionsController.delete
  );

module.exports = router;
