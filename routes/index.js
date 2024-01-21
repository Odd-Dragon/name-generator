const express = require('express');
const router = express.Router();
const mainController = require('../controllers');
const contactsRouter = require('./contacts');

router.all('/', mainController.home);
router.use('/contacts', contactsRouter);

module.exports = router;