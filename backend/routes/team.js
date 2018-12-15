const express = require('express');
const router = express.Router();

const Team = require('../models/team');
const User = require('../models/user');

router.post('/update_gold', (req, res, next) => {
  Team.findOneAndUpdate({_id: req.body.teamid}, {$set: {gold: req.body.gold, invested: true}}, (err, doc, r) => {
    if (!err) {
      res.json({
        status: 200
      });
    } else {
      res.json({
        status: 401
      });
    }
  });
});

// fetch current team details
router.post('', (req, res, next) => {
  Team.findOne({_id: req.body.teamid}, (err, obj) => {
    if (!err) {
      res.json({
        status: 200,
        team: obj
      });
    } else {
      res.json({
        status: 401,
        message: err
      })
    }
  });
});

// get user details
router.get('/user/:name', (req, res, next) => {
  User.findOne({username: req.params.name}, (err, user) => {
    if (err) {
      res.json({
        status: 401
      });
    } else {
      res.json({
        status: 200,
        user: user
      })
    }
  })
});

// invest
router.post('/invest', (req, res, next) => {
  console.log(req.body);
  Team.findOneAndUpdate({_id: req.body.teamid}, {$set: {
    invested: true,
    gold: req.body.gold,
    food: req.body.food,
    military: req.body.military,
    research: req.body.research
  }}, (err, doc, r) => {
    if (!err) {
      res.json({
        status: 200
      });
    } else {
      res.json({
        status: 401
      });
    }
  })
})

module.exports = router;
