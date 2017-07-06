var mongoose = require('mongoose');
var schema = mongoose.Schema

var dog = new schema({
  "name":String,
  "age":Number,
  "collarid":String
})

module.exports = mongoose.model('Dog',dog)
