const path = require('path');
const router = require('express').Router();

//main route to home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"))
});

//routes to main notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//backstop wildcard route to home page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router