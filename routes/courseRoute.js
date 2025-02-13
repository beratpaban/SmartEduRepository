const express = require("express");
const courseControllers = require("../controllers/courseControllers");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router
  .route("/")
  .post(roleMiddleware(["teacher", "admin"]), courseControllers.createCourse);
router.route("/").get(courseControllers.getAllCourse);
router.route("/:slug").get(courseControllers.getCourse);

module.exports = router;
