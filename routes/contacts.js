const express = require('express');
const router = express.Router();
const contactsMiddleware = require('../controllers/contacts');

router.get('/', contactsMiddleware.getAll);

router.get('/:id', contactsMiddleware.getOne);

module.exports = router;