//require express package
const express = require('express');
//create app variable to create server
const app = express();
//defines port and provides fallback port
const PORT = process.env.PORT || 3001;

//defines routes as constants
const apiRoutes = require('./routes/apiRoutes/notesRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/notes', apiRoutes);

//deploys middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


//instructs app to listen at port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
