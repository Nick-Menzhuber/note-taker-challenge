//require express, create Router
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//pull in note creation function and database
//const createNote = require("../../lib/notes");
const notes = require("../../db/db.json");

//setting api routes
router.get("/notes", (req, res) => {
  if (notes) {
    res.json(notes);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  console.log(req.body.id);
  notes.push(req.body);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  //res.send("Delete route works");
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id == notes[i].id) {
    notes.splice(i, 1);
    }
  }
  res.json(notes);
});

//playing around with ID calls here, might not need this code in final build
router.route("/:id").get((req, res) => {
  res.json({ title: "test title" });
  // res.send(`Get User With ID ${req.params.id}`)
});

const noteIDs = [];
router.param("id", (req, res, next, id) => {
  req.noteID = noteIDs[id];
  next();
});

//export router
module.exports = router;
