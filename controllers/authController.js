const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Import and configure dotenv to manage environment variables
const dotenv = require("dotenv");
dotenv.config();

// Function to generate a JSON Web Token (JWT) for a user
const generateToken = (id) => {
  // Sign a new token with the user's id and a secret key, set to expire in 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Controller function to register a new user
const registerUser = async (req, res) => {
  // Extract username, email, and password from the request body
  const { username, email, password } = req.body;

  // Check if a user with the given email already exists
  const userExists = await User.findOne({ email });

  // Create a new user with the provided username, email, and password
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// Controller function to authenticate a user
const authUser = async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  // Check if the user exists and if the password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

module.exports = { registerUser, authUser };
