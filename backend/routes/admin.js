const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Team = require('../models/team');
const Storyline = require('../models/storyline');

router.get('/count/user', (req, res, err) => {
  User.count({}, (err, count) => {
    if (err) {
      res.json({
        status: 401,
        message: err
      })
    } else {
      res.json({
        status: 200,
        count: count
      })
    }
  })
});

router.get('/leaderboard', (req, res, err) => {
  Team.find({}, (err, docs) => {
    if (!err) {
      res.json({
        status: 200,
        leaderboard: docs
      });
    }
  });
});

router.post('/storyline', (req, res, err) => {
  const story = new Storyline({
    question: req.body.question,
    military_return_ratio: req.body.military,
    food_return_ratio: req.body.food,
    research_return_ratio: req.body.research,
    other_return_ratio: req.body.others
  });
  story.save().then(savedStory => {
    res.json({
      status: 200,
      savedStory: savedStory
    });
  });
});

router.get('/storyline', (req, res, err) => {
  Storyline.find({}, (err, data) => {
    if (err) {
      res.json({
        status: 401,
        message: "Could not fetch data"
      });
    } else {
      res.json({
        status: 200,
        storylines: data
      });
    }
  });
});

router.delete('/storyline/:id', (req, res, next) => {
  Storyline.deleteOne({_id: req.params.id}).then(result => {
    if (result) {
      res.json({
        status: 200,
        message: "Storyline deleted."
      });
    } else {
      res.json({
        status: 401,
        message: "Some error occured."
      })
    }
  })
})

router.delete('/users/delete-all', (req, res, err) => {
  User.deleteMany({}, err => {
    if (err) {
      res.json({
        status: 401,
        error: err
      })
    } else {
      res.json({
        status: 201,
        message: "Successfully deleted all users"
      })
    }
  });
});

router.delete('/teams/delete-all', (req, res, err) => {
  Team.deleteMany({}, (req, res, err) => {
    if (err) {
      res.json({
        status: 401,
        error: err
      });
    } else {
      res.json({
        status: 201,
        message: "Successfully deleted all teams"
      })
    }
  })
})

router.get('count/team', (req, res, err) => {

});


module.exports = router;
