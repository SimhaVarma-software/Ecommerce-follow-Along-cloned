const express = require("express");

const userRouter = express.Router();

const userModel = require("../models/userModel.js");

// Signup route
userRouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({ message: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "User already exists" });
        }
        const newUser = await userModel.create({ name, email, password });
        return res.status(201).send({ message: "User created successfully", user: newUser });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

// Login route
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const user = await userModel.findOne({ email, password });
        if (!user) {
            return res.status(400).send({ message: "Please signup first" });
        }
        return res.status(200).send({ message: "Login successfully", user });
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong" });
    }
});

module.exports = userRouter;