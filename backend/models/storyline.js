const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  question: String,
  current: {
    type: Boolean,
    default: false
  },
  agriculture_rate: Number,
  infantry_rate: Number,
  cavalry_rate: Number,
  siege_rate: Number,
  technology_rate: Number,
  finance_rate: Number,
  industry_rate: Number,
  transport_rate: Number,
  research_rate: Number,
  gold_rate: Number
})

module.exports = mongoose.model('Storyline', storySchema);
