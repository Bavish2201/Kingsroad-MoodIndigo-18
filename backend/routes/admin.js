const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Team = require('../models/team');
const Storyline = require('../models/storyline');

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
    military_rate: req.body.military,
    food_rate: req.body.food,
    research_rate: req.body.research,
    gold_rate: req.body.gold
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

router.put('/storyline/change', (req, res, next) => {
  Storyline.findOne({current: true}, (err, currStoryline) => {
    if (!err) {
      Storyline.findOneAndUpdate({current: true}, {$set: {current: false}}, (err, doc, r) => {});
    }
    Storyline.findOneAndUpdate({_id: req.body.id}, {$set: {current: true}}, (err, doc, r) => {});
    Team.updateMany({}, {$set:{invested: false}}, (err, obj) => {
      res.json({
        status: 200
      });
    });
  });
});

router.get('/storyline/current', (req, res, next) => {
  Storyline.findOne({current: true}, (err, obj) => {
    if (!err) {
      res.json({
        status: 200,
        storyline: obj
      })
    } else {
      res.json({
        status: 401
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
  Team.deleteMany({}, err => {
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

router.get('/count/team', (req, res, err) => {
  Team.count({}, (err, count) => {
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

// get team details
router.post('/team/details', (req, res, next) => {
  Team.findOne({teamname: req.body.teamname}, (err, obj) => {
    if (!err) {
      res.json({
        status: 200,
        team: obj
      });
    } else {
      res.json({
        status: 401
      });
    }
  });
});


// delete a team
router.post('/team/delete', (req, res, next) => {
  Team.findOneAndDelete({teamname: req.body.teamname}, (err, r) => {
    if (r) {
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

// get invested count
router.get('/count/invested', (req, res, err) => {
  Team.count({invested: true}, (err, count) => {
    if (!err) {
      res.json({
        status: 200,
        count: count
      });
    }
  });
});


module.exports = router;
