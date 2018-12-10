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
  }
})

module.exports = mongoose.model('Team', teamSchema);