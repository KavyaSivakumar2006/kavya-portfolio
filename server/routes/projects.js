const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects"
        });
    }
});

// POST a new project
router.post("/", async (req, res) => {
    try {
        const project = new Project(req.body);
        const savedProject = await project.save();

        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create project",
            error: error.message
        });
    }
});

module.exports = router;