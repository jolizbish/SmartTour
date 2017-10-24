var mongoose = require('mongoose');

var Agent = mongoose.Schema({
  // unique id syntax: _id
  google_id: { type: String, required: true, unique: true },
  displayName: { type: String },
  phone: { type: String },
  email: { type: String },
  clients: [],
  agency: { type: String }
});

module.exports = mongoose.model('Agent', Agent);
