const express = require('express');
const app = express();

const mainRoutes = require('./routes');

app.use('/', mainRoutes);

// Server setup
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
