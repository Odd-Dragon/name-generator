const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('./routes');
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const app = express();
const swaggerFile = require('./swagger.json'); 
const port = 3000;

// Middleware and other setup
app.use(express.json());

// Routes
app.use('/', mainRoutes);
app.use('/contacts', require('./routes/contacts'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
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