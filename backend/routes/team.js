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
    agriculture: req.body.agriculture,
    infantry: req.body.infantry,
    cavalry: req.body.cavalry,
    siege: req.body.siege,
    technology: req.body.technology,
    finance: req.body.finance,
    industry: req.body.industry,
    transport: req.body.transport
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
    } else if (res.agriculture < req.body.agriculture) {
      status = 401;
      message = 'Not enough agriculture to trade';
    } else if (res.infantry < req.body.infantry) {
      status = 401,
      message = 'Not enough infantry to trade';
    } else if (res.cavalry < req.body.cavalry) {
      status = 401,
      message = 'Not enough cavalry to trade';
    } else if (res.siege < req.body.siege) {
      status = 401,
      message = 'Not enough siege to trade';
    } else if (res.technology < req.body.technology) {
      status = 401,
      message = 'Not enough technology to trade';
    } else if (res.finance < req.body.finance) {
      status = 401,
      message = 'Not enough finance to trade';
    } else if (res.industry < req.body.industry) {
      status = 401,
      message = 'Not enough industry to trade';
    } else if (res.transport < req.body.transport) {
      status = 401,
      message = 'Not enough transport to trade';
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
            agriculture: req.body.agriculture,
            infantry: req.body.infantry,
            cavalry: req.body.cavalry,
            siege: req.body.siege,
            technology: req.body.technology,
            finance: req.body.finance,
            industry: req.body.industry,
            transport: req.body.transport
          }}, (err, doc, r) => {

            Team.findOneAndUpdate({teamname: req.body.from_teamname}, {$inc: {
              gold: -1 * req.body.gold,
              agriculture: -1 * req.body.agriculture,
              infantry: -1 * req.body.infantry,
              cavalry: -1 * req.body.cavalry,
              siege: -1 * req.body.siege,
              technology: -1 * req.body.technology,
              finance: -1 * req.body.finance,
              industry: -1 * req.body.industry,
              transport: -1 * req.body.transport
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
