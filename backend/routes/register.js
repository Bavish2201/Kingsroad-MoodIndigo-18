const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Team = require('../models/team');

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
          message: "successfull",
          user_id: savedUser._id
        });
      })
    } else {
      res.json({
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
        status: 0,
        message: "Team name already taken"
      });
    }
  });
  User.findOne({username: req.body.username2}).then(data => {
    if (!usrData) {
      res.json({
        status: 0,
        message: req.body.username2 + " doesn't exist. Please register first"
      });
    }
  });
  User.findOne({username: req.body.username3}).then(data => {
    if (!usrData) {
      res.json({
        status: 0,
        message: req.body.username3 + " doesn't exist. Please register first"
      });
    }
  });
  User.findOne({username: req.body.username4}).then(data => {
    if (!usrData) {
      res.json({
        status: 0,
        message: req.body.username4 + " doesn't exist. Please register first"
      });
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
    User.findOneAndUpdate({username: username1}, {teamid: id});
    User.findOneAndUpdate({username: username2}, {teamid: id});
    User.findOneAndUpdate({username: username3}, {teamid: id});
    if (username4) {
      User.findOneAndUpdate({username: username4}, {teamid: id});
    }

    res.json({
      status: 1,
      message: "Team created successfully"
    });
  });
});

router.delete('/users/delete/all', (req, res, err) => {
  User.deleteMany({}, err => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "Successfully deleted all users"
      })
    }
  });
});

module.exports = router;
