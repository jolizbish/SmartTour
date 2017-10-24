var mongoose = require('mongoose');

var Client = mongoose.Schema({
  // unique id syntax: _id
  clients: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  agent: { type: Number, required: true },
  agency: { type: String, required: true },
  maxBudget: { type: Number, required: true },
  bedsBaths: { type: String, required: true },
  pets: { type: String, required: true },
  moveInDate: { type: Date, required: true },
  specPrefs: { type: String }
});

module.exports = mongoose.model('Client', Client);
