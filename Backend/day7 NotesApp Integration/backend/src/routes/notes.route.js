const express = require("express");
const {
    createNotes,
    allNotes,
    noteByID,
    noteUpdateByID,
    noteDeleteByID,
    notePatchUpdateByID,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotes);
router.get("/allNotes", allNotes);
router.get("/:id", noteByID);
router.put("/:id", noteUpdateByID);
router.patch("/:id", notePatchUpdateByID);
router.delete("/:id", noteDeleteByID);

module.exports = router;
