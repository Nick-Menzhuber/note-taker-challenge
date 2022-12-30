//required modules
const express = require('express');
//const {v4 : uuidv4} = require('uuid');

//create app variable to create server with express
const app = express();

//defines port and provides fallback port
const PORT = process.env.PORT || 3001;

//creates variables for route paths
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

//deploys middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//sets route paths
app.use('/api', api);
app.use('/', html);

//instructs app to listen at port
app.listen(PORT, () => {
  console.log(`Server now listening at Port: ${PORT}`);
});