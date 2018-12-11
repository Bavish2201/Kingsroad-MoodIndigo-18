const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Team = require('../models/team');

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

router.get('/users/delete-all', (req, res, err) => {
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

router.get('count/team', (req, res, err) => {

});


module.exports = router;
