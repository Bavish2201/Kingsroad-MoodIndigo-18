const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  question: String,
  current: {
    type: Boolean,
    default: false
  },
  military_return_ratio: Number,
  food_return_ratio: Number,
  research_return_ratio: Number,
  other_return_ratio: Number
})

module.exports = mongoose.model('Storyline', storySchema);
