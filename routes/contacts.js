const express = require('express');
const router = express.Router();
const contactsMiddleware = require('../controllers/contacts');

//get all contacts
router.get('/', contactsMiddleware.getAll);
//get one contact
router.get('/:id', contactsMiddleware.getOne);
//create a new contact
router.post('/', contactsMiddleware.create);
//update a contact
router.put('/:id', contactsMiddleware.update);
//delete a contact
router.delete('/:id', contactsMiddleware.delete)
module.exports = router;