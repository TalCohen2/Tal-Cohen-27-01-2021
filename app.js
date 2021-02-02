// Necessary modules import.
const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./modules/controllers/users.controller');
const messagesController = require('./modules/controllers/messages.controller');
const app = express(); // Express init
const PORT = process.env.PORT || 8080; // App port declaration
app.use(bodyParser.json()); //Sets bodyParser json middleware for parsing received JSON data
app.use(bodyParser.urlencoded({ // Sets bodyParser URL middleware for parsing URL data.
  extended: true
}));

app.use((req, res, next) => { // Sets headers middleware for the server accessibility
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Routes to the necessary controller by URL
app.use(express.static('public'));
app.use('/messages', messagesController);
app.use('/users', usersController);
app.use('**', (req, res) => { // returns 404 for undefined URL requests
  // res.status(404).send('404 Unknown request');
  res.redirect('/');
})

app.listen(PORT); // Activates the app by its port