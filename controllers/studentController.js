const Student = require("../models/Student");
const Course = require("../models/Course");

exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("course");
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("course");
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
