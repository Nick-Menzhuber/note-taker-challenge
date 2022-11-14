//require express, create Router
const express = require('express');
const router = express.Router();

//setting api routes
router.get('/', (req, res) => {
  res.send("Existing Notes")
})

//export router
module.exports = router