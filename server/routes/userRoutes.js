const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Log in a user
router.post("/login", loginUser);

module.exports = router;
