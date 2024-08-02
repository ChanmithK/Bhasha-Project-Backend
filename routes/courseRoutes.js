const express = require("express");
const { addCourse, getAllCourses } = require("../controllers/courseController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addCourse);
router.get("/", protect, getAllCourses);

module.exports = router;
