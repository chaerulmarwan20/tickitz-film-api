const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");
const redis = require("../middlewares/redis");
const auth = require("../middlewares/auth");

router
  .get(
    "/",
    auth.verification(),
    redis.allData("getAllSchedule"),
    scheduleController.findAll
  )
  .get("/time", auth.verification(), scheduleController.findAllTime)
  .get("/ticket", auth.verification(), scheduleController.findAllTicket)
  .get("/:id", auth.verification(), scheduleController.findOne);
// .post("/", auth.verification(), auth.isAdmin(), scheduleController.create)
// .put("/:id", auth.verification(), auth.isAdmin(), scheduleController.update)
// .delete(
//   "/:id",
//   auth.verification(),
//   auth.isAdmin(),
//   scheduleController.delete
// );

module.exports = router;
