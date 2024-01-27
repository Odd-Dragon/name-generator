const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const contactsMiddleware = {
  getAll: async (req, res, next) => {
    try {
      const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find()
        .toArray();

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getOne: async (req, res, next) => {
    try {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: userId })
        .toArray();

      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  create: async (req, res, next) => {
    try {
      const newContact = req.body;
      await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .insertOne(newContact);
      res.status(201).json({ id: newContact._id });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    };
  },

  update: async (req, res, next) => {
    try {
      const contactId = req.params.id;
      await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .updateOne({ _id: new ObjectId(contactId) }, { $set: req.body });

      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    };
  },

  delete: async (req, res, next) => {
    try {
      const contactId = req.params.id;
      await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .deleteOne({ _id: new ObjectId(contactId) });

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    };
  },
};

module.exports = contactsMiddleware;