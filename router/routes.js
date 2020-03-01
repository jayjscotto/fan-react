const router = require('express').Router();
const passport = require(".././config/config");
const path = require("path");
// Requiring our models for syncing
const db = require(".././models");
const mongoose = require("mongoose");


//Require middleware for checking if a user is logged in
const isAuthenticated = require("../config/isAuthenticated");

//Using passport.authenticate middleware & local strategy
//if user has valid login credentials, send them to user homepage
//otherwise send an error
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req)
  console.log(req.user);
  //redirection will happen on the front-end
  //front-end receives this route if the user is authenticated
  res.send(req.user)
});

router.get('/', (req, res) => {
  res.json('Hello World');
});

//route to log out
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});


module.exports = router;


