require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("API is working!");
});

// Start the Server
const port = process.env.PORT || 5001; // local for now and will branch out soon
app.listen(port, () => {
    console.log(`Server is running on this port -> ${port}`);
});
