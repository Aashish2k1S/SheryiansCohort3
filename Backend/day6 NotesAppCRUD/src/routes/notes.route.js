const express = require("express");
const {
    createNotes,
    allNotes,
    noteByID,
    noteUpdateByID,
    noteDeleteByID,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotes);
router.get("/allNotes", allNotes);
router.get("/:id", noteByID);
router.post("/:id", noteUpdateByID);
router.delete("/:id", noteDeleteByID);

module.exports = router;
