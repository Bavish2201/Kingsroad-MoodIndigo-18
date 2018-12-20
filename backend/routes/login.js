const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.post('', (req, res, err) => {
  User.findOne({username: req.body.username, password: req.body.password}, (err, usrData) => {
    console.log(usrData);
    if (usrData) {
      res.json({
        status: 200,
        message: "Successful",
        user: usrData._id,
        username: usrData.username,
        teamid: usrData.teamid
      });
    }
    else {
      res.json({
        status: 401,
        message: "Invalid MI Number and password"
      });
    }
  });
});

module.exports = router;
