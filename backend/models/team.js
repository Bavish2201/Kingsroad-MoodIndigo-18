const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  teamname: {
    type: String,
    required: true
  },
  user1: {
    type: String,
    default: null
  },
  user2: {
    type: String,
    default: null
  },
  user3: {
    type: String,
    default: null
  },
  user4: {
    type: String,
    default: null
  },
  gold: {
    type: Number,
    default: 100
  },
  food: {
    type: Number,
    default: 0
  },
  military: {
    type: Number,
    default: 0
  },
  research: {
    type: Number,
    default: 0
  },
  invested: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Team', teamSchema);
