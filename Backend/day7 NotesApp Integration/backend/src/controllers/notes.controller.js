const { NotesModel } = require("../models/notes.model");

//CREATE
const createNotes = async (req, res) => {
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
};

//READ
const allNotes = async (req, res) => {
    try {
        const allNotes = await NotesModel.find();

        return res.status(200).json({
            message: "All notes fetched",
            data: allNotes,
        });
    } catch (error) {
        // console.log("error in creation: ", error);
        return res.status(401).json({
            message: error.message,
        });
    }
};

//READ ONE
const noteByID = async (req, res) => {
    try {
        let noteID = req.params.id;
        // console.log(noteID);

        const note = await NotesModel.findById(noteID);

        return res.status(200).json({
            message: `Note with ID: ${noteID} fetched`,
            data: note,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

//UPDATE via PUT
const noteUpdateByID = async (req, res) => {
    try {
        let noteID = req.params.id;
        let { title, description } = req.body;

        // console.log(noteID);
        // console.log(title);
        // console.log(description);

        // this will return the old existing note before update
        // const note = await NotesModel.findByIdAndUpdate(noteID, {
        //     title,
        //     description,
        // });

        //this will return the note after the update as res we can send the same as well
        const note = await NotesModel.findByIdAndUpdate(
            noteID,
            {
                title,
                description,
            },
            { new: true },
        );

        return res.status(201).json({
            message: `Note with ID: ${noteID}, updated`,
            data: note,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

//UPDATE via PATCH
const notePatchUpdateByID = async (req, res) => {
    try {
        let noteID = req.params.id;
        let { title, description } = req.body;

        
        const note = await NotesModel.findByIdAndUpdate(
            noteID,
            {
                title,
                description,
            },
            { new: true },
        );

        return res.status(201).json({
            message: `Note with ID: ${noteID}, updated`,
            data: note,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

//DELETE ONE
const noteDeleteByID = async (req, res) => {
    try {
        let noteID = req.params.id;

        const note = await NotesModel.findByIdAndDelete(noteID);

        return res.status(200).json({
            message: `Note with ID: ${noteID} deleted`,
            data: note,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    createNotes,
    allNotes,
    noteByID,
    noteUpdateByID,
    notePatchUpdateByID,
    noteDeleteByID,
};
