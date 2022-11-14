//list module requirements
const express = require('express');
const fs = require('fs');
const db = require('./db/db.json')

//define port
const PORT = process.env.PORT || 3001;