const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  question: String,
  current: {
    type: Boolean,
    default: false
  },
  military_rate: Number,
  food_rate: Number,
  research_rate: Number,
  gold_rate: Number
})

module.exports = mongoose.model('Storyline', storySchema);
