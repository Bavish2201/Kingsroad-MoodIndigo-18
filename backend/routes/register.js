const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Team = require('../models/team');

//
// Register new user
//
router.post('', (req, res, err) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    teamid: null
  })
  User.findOne({username: req.body.username}).then(userData => {
    console.log(userData);
    if (!userData) {
      user.save().then(savedUser => {
        res.status(201).json({
          status: 200,
          message: "successfull",
          username: savedUser.username
        });
      })
    } else {
      res.json({
        status: 401,
        message: 'Username exists'
      });
    }
  });
});

//
// Create new team
//
router.post('/team', (req, res, err) => {
  Team.findOne({teamname: req.body.teamname}).then(teamData => {
    if (teamData) {
      res.json({
        status: 400,
        message: "Team name already taken"
      });
      return;
    }
  });
  User.findOne({username: req.body.username2}).then(data => {
    if (!data) {
      res.json({
        status: 401,
        message: req.body.username2 + " doesn't exist. Please register first"
      });
      return;
    }
  });
  User.findOne({username: req.body.username3}).then(data => {
    if (!data) {
      res.json({
        status: 401,
        message: req.body.username3 + " doesn't exist. Please register first"
      });
      return;
    }
  });
  User.findOne({username: req.body.username4}).then(data => {
    if (!data) {
      res.json({
        status: 401,
        message: req.body.username4 + " doesn't exist. Please register first"
      });
      return;
    }
  });
  const team = new Team({
    teamname: req.body.teamname,
    user1: req.body.username1,
    user2: req.body.username2,
    user3: req.body.username3,
    user4: req.body.username4,
    gold: 100
  });
  team.save().then(savedTeam => {
    const id = savedTeam._id;
    console.log(id);
    User.findOneAndUpdate({username: req.body.username1}, {$set:{teamid: id}}, (err, obj) => {
        if (err) console.log(err);
        else console.log('User 1 updated');
      });
    User.findOneAndUpdate({username: req.body.username2}, {$set:{teamid: id}}, (err, obj) => {
        if (err) console.log(err);
        else console.log('User 2 updated');
      });
    User.findOneAndUpdate({username: req.body.username3}, {$set:{teamid: id}}, (err, obj) => {
        if (err) console.log(err);
        else console.log('User 3 updated');
      });
    if (req.body.username4) {
      User.findOneAndUpdate({username: req.body.username4}, {$set:{teamid: id}}, (err, obj) => {
          if (err) console.log(err);
          else console.log('User 4 updated');
        });
    }

    res.json({
      status: 200,
      message: "Team created successfully"
    });
  });
});

module.exports = router;
