const mongoose = require('mongoose');

const accomplishedSchema = new mongoose.Schema({
  title: String,

});

const Accomplished= mongoose.model('Accomplished', accomplishedSchema, 'AccomplishedCollections');

module.exports = Accomplished;
