const express = require("express");
const categoryControllers = require("../controllers/categoryControllers");

const router = express.Router();

router.route("/").post(categoryControllers.createCategory);
// router.route("/").get(categoryControllers.getAllCourse);
// router.route("/:slug").get(categoryControllers.getCourse);

module.exports = router;
