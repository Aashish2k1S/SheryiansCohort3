const express = require("express");
const { conntDB } = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();

app.use(express.json());

conntDB();

app.get("/", (req, res) => {
    res.send("server is working fine");
});

app.post("/create", async (req, res) => {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({ title, description });

    res.send({
        success: true,
        message: "Note created successfully",
        data: newNote,
    });
});

module.exports = { app };
