const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  address: String,
  contactNumber: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }, // One-to-Many relationship
});

module.exports = mongoose.model("Student", studentSchema);
