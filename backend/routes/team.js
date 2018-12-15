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

// trade
router.post('/trade', (req, __response, next) => {
  let status = 200;
  let message = 'success';
  Team.findOne({teamname: req.body.from_teamname}, (err, res) => {
    if (!res) {
      status = 404;
      message = req.body.from_teamname + ' does not exist';
    } else if (res.gold < req.body.gold) {
      status = 401;
      message = 'Not enough gold to trade';
    } else if (res.military < req.body.military) {
      status = 401;
      message = 'Not enough military to trade';
    } else if (res.food < req.body.food) {
      status = 401,
      message = 'Not enough food to trade';
    }
    if (status !== 200) {
      __response.json({
        status: status,
        message: message
      })
    } else {

      Team.findOne({teamname: req.body.to_teamname}, (err, res) => {
        if (!res) {
          status = 404;
          message = req.body.to_teamname + ' does not exist';
        }

          console.log('here');
          Team.findOneAndUpdate({teamname: req.body.to_teamname}, {$inc:{
            gold: req.body.gold,
            military: req.body.military,
            food: req.body.food
          }}, (err, doc, r) => {

            Team.findOneAndUpdate({teamname: req.body.from_teamname}, {$inc: {
              gold: -1 * req.body.gold,
              military: -1 * req.body.military,
              food: -1 * req.body.food
            }}, (_err, _doc, _res) => {

              __response.json({
                status: status,
                message: message
              });

            });
          });

      });
    }
  });
});

module.exports = router;
