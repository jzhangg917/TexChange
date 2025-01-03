const express = require("express");
const router = express.Router();
const { getExample } = require("../controllers/exampleController");

// Define routes
router.get("/", getExample);

module.exports = router;
