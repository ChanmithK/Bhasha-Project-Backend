const express = require("express");
const {
  addStudent,
  getStudentById,
  getAllStudents,
} = require("../controllers/studentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addStudent);
router.get("/:id", protect, getStudentById);
router.get("/", protect, getAllStudents);

module.exports = router;
