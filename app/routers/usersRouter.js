const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const auth = require("../middlewares/auth");
const verification = require("../middlewares/verification");

router
  .get("/", usersController.findAll)
  .get("/:id", usersController.findOne)
  .post("/", usersController.create)
  .put("/moviegoers", usersController.moviegoers)
  .post("/register", auth.register)
  .post("/login", usersController.login)
  .get("/login/verification", verification(), auth.success)
  .put("/:id", usersController.update)
  .delete("/:id", usersController.delete);

module.exports = router;
