require('dotenv').config();
const router = require('express').Router();
const passport = require('.././config/config');
// Requiring our models for syncing
const User = require('.././models/User');
//Require middleware for checking if a user is logged in
const isAuthenticated = require('../config/isAuthenticated');

// Using passport.authenticate middleware & local strategy
// if user has valid login credentials, send them to user homepage
// otherwise send an error
router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.body);
  //redirection will happen on the front-end
  //front-end receives this route if the user is authenticated
  res.send(req.user);
});

router.post('/register', (req, res) => {
  const user = req.body.user;
  console.log(user)

  // if the user confirmed the password correctly
  if (user.password === user.password2) {
    const newUser = new User({
      email: user.email,
      username: user.username,
      password: user.password
    });

    // if the signup code is correct
    if (user.code === process.env.CODE) {
      User.createUser(newUser, function(err, user) {
        if (err) throw err;
        res.send(user).end();
      });
    }
  } else {
    res
      .status(500)
      .send('{errors: "Passwords don\'t match"}')
      .end();
  }
});

router.get('/', (req, res) => {
  res.json('Hello World');
});

//route to log out
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
