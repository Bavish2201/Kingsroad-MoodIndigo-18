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
  invested: {
    type: Boolean,
    default: false
  },

  gold: {
    type: Number,
    default: 100
  },

  agriculture: {
    type: Number,
    default: 0
  },
  infantry: {
    type: Number,
    default: 0
  },
  cavalry: {
    type: Number,
    default: 0
  },
  siege: {
    type: Number,
    default: 0
  },
  technology: {
    type: Number,
    default: 0
  },
  finance: {
    type: Number,
    default: 0
  },
  industry: {
    type: Number,
    default: 0
  },
  transport: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Team', teamSchema);
