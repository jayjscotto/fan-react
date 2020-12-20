require('dotenv').config();
const passport = require('passport');
require('../config/passport')(passport);
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', function(req, res, err) {
  console.log(req.body);
  if (
    !req.body.email ||
    !req.body.userName ||
    !req.body.password ||
    !req.body.password2 ||
    req.body.code !== process.env.CODE
  ) {
    res.status(500).send({
      success: false,
      msg: 'Authentication failed. You must fill in all fields'
    });
  } else {
    if (req.body.password !== req.body.password2) {
      res.status(418).send({
        success: false,
        msg: 'Your passwords must match'
      });
    } else {
      // create new user variable
      const newUser = new User({
        // this contains new parsing params
        email: req.body.email,
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
        });
      });
    }
  }
});

router.post('/login', function(req, res) {
  User.findOne(
    {
      // updated username to userName to match model
      email: req.body.email
    },
    function(err, user) {
      if (err) throw err;
      // if not a registered user...
      if (!user) {
        // user not found

        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        // check if password matches
        // comparePassword method can be found in User model
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            const token = jwt.sign(user.toJSON(), process.env.SECRET);
            // return the information including token as JSON
            user.password = undefined;
            res.json({ success: true, token: 'JWT ' + token, user: user });
          } else {
            // auth failed wrong password
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    }
  );
});

module.exports = router;
