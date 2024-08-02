const Course = require("../models/Course");

// Controller function to add a new course
exports.addCourse = async (req, res) => {
  try {
    // Create a new Course instance with the data from the request body
    const course = new Course(req.body);
    // Save the course to the database
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all courses
exports.getAllCourses = async (req, res) => {
  try {
    // Retrieve all courses from the database
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
