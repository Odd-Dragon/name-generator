const contactsController = require('./contacts');

const home = function (req, res) {
    console.log('Hello');
    res.send('Garrett Warner');
  };

module.exports = {
    home
  };