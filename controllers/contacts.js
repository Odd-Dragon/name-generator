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
};

module.exports = contactsMiddleware;