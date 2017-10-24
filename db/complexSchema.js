var mongoose = require('mongoose');


var Complex = mongoose.Schema({
  // unique id syntax: _id
  name: {type: String, required: true},
  address: {type: String, required: true},
  parking: {type: Number},
  deposit: {type: Number},
  app: {type: Number},
  admin: {type: Number},
  petRent: {type: Number},
  petFee: {type: Number},
  petDeposit: {type: Number},
  recordedListings: []
})

module.exports = mongoose.model('Complex', Complex);
