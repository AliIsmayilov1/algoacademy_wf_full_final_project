const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: String,
});

const User = mongoose.model("User", userSchema);

// Register post model
app.post("/api/register", async (req, res) => {
  const { firstname, lastname, age, gender } = req.body;
  try {
    const newUser = new User({ firstname, lastname, age, gender });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered,You can buy a memebership" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});
app.listen(5000, () => {
  console.log("Server Started");
});
