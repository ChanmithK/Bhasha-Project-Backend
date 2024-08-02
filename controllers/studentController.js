const Student = require("../models/Student");
const Course = require("../models/Course");

// Controller function to add a new student
exports.addStudent = async (req, res) => {
  try {
    // Create a new Student instance with the data from the request body
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get a student by ID
exports.getStudentById = async (req, res) => {
  try {
    // Find the student by ID and populate the associated course data
    const student = await Student.findById(req.params.id).populate("course");
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Controller function to get all students
exports.getAllStudents = async (req, res) => {
  try {
    // Retrieve all students from the database and populate the associated course data
    const students = await Student.find().populate("course");
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
