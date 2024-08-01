const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const projectRoutes = require("./routes/projectRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
