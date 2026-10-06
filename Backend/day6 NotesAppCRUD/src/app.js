const express = require("express");
// const dotenv = require('dotenv');
// dotenv.config();
require("dotenv").config();
const { connectDB } = require("./config/db");
// const { createNotes } = require("./controllers/notes.controller");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello from Notes App");
});


// app.post("/create", createNotes);

app.use("/notes", notesRoute);

module.exports = { app };
