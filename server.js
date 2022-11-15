//required modules
const express = require('express');
const {v4 : uuidv4} = require('uuid');
const path = require('path');
const fs = require('fs');

//create app variable to create server and define database json
const app = express();
const api = require('./routes/index')

//defines port and provides fallback port
const PORT = process.env.PORT || 3001;


//deploys middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//sets server route map
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})
//backstop wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


//instructs app to listen at port
app.listen(PORT, () => {
  console.log(`Server now listening at Port: ${PORT}`);
});
