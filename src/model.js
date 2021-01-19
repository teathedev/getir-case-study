const mongoose = require('mongoose');


module.exports = mongoose.model('record', {
  key: String,
  createdAt: Date,
  counts: [Number],
  value: String
});

