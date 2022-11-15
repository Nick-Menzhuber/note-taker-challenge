//require express, create Router
const express = require('express');
const router = express.Router();

//setting api routes
router.get('/', (req, res) => {
  res.json({"title": "test title"})
})



router.delete('/', (req, res) => {
  res.send ("Delete route works")
})

//playing around with ID calls here, might not need this code in final build
router
  .route('/:id')
  .get((req, res) => {
    res.json({"title": "test title"})
   // res.send(`Get User With ID ${req.params.id}`)
  })

const noteIDs = []
router.param("id", (req, res, next, id) => {
  req.noteID = noteIDs[id]
  next()
})  

//export router
module.exports = router