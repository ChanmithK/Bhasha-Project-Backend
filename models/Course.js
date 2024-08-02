const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  department: String,
  fee: Number,
});

module.exports = mongoose.model("Course", courseSchema);
