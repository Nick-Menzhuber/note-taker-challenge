//required modules, create Router
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const notes = require("../../db/db.json");

//setting api routes
router.get("/notes", (req, res) => {
  if (notes) {
    res.json(notes);
  } else {
    res.send(404);
  }
});

//post route to create new note
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  console.log(req.body.id);
  notes.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

//delete route to delete note by id
router.delete("/notes/:id", (req, res) => {
  //res.send("Delete route works");
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id == notes[i].id) {
    notes.splice(i, 1);
    }
  }
  res.json(notes);
});

//export router
module.exports = router;
