var mongoose = require('mongoose');

var Apartment = mongoose.Schema({
  // unique id syntax: _id
  client_id: {type: String, required: true}, // references the Client
  agent_id: {type: String, required: true}, // references Agent
  complex_id: {type: String, required: true}, // references Complex
  beds: {type: Number, required: true},
  baths: {type: Number, required: true},
  sqFoot: {type: Number, required: true},
  specials: {type: Number}, // do I actually want this to be a Number???
  dateAvail: {type: Date, required: true},
  leaseTerm: {type: Number},
  dateRecorded: {type: String, required: true},
  agentComments: {type: String}
});

module.exports = mongoose.model('Apartment', Apartment);
