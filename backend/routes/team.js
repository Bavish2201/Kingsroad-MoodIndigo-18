const express = require('express');
const router = express.Router();

const Team = require('../models/team');

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

module.exports = router;
