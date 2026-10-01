const express = require("express");
const { connectDB } = require("./config/db");
const { NotesModel } = require("./models/notes.model");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello from Notes App");
});

app.post("/create", async (req, res) => {
    try {
        let { title, description } = req.body;

        let newNote = await NotesModel.create({ title, description });

        // retrun res.send({
        //     success: true,
        //     message: "note created successfully",
        //     data: newNote,
        // });

        return res.status(201).json({
            message: "note created successfully",
            data: newNote,
        });
    } catch (error) {
        // console.log("error in creation: ", error);
        return res.status(401).json({
            message: error.message,
        });
    }
});

module.exports = { app };
