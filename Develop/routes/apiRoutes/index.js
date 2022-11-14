const express = require('express');
const pathfinderUI = require('pathfinder-ui')

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use('/pathfinder', function(req, res, next){
	pathfinderUI(app)
	next()
}, pathfinderUI.router)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

app.get("*", function(req, res){
	res.redirect('/pathfinder');
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// 