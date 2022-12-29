//required modules
const express = require('express');
const {v4 : uuidv4} = require('uuid');
const path = require('path');
const fs = require('fs');

//create app variable to create server with express
const app = express();


//defines port and provides fallback port
const PORT = process.env.PORT || 3001;

const api = require('./routes/apiRoutes/api');
const html = require('./routes/htmlRoutes');


//deploys middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routes
app.use('/api', api);
app.use('/', html);


//sets server route map
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});




//instructs app to listen at port
app.listen(PORT, () => {
  console.log(`Server now listening at Port: ${PORT}`);
});
