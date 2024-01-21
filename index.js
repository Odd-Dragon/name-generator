const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('./routes');
const mongodb = require('./db/connect');
const app = express();
const port = 3000;

// Middleware and other setup
app.use(express.json());

// Routes
app.use('/', mainRoutes);
app.use('/contacts', require('./routes/contacts'));

/*app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});