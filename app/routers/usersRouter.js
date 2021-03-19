const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middlewares/auth");

router
  .get("/", usersController.findAll)
  .get("/test", auth.verification(), usersController.success)
  .get("/:id", usersController.findOne)
  .post("/", usersController.create)
  .put("/moviegoers", usersController.moviegoers)
  .post("/login", usersController.login)
  .put("/:id", usersController.update)
  .delete("/:id", usersController.delete);

module.exports = router;
