//import passport packages
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//database
const User = require('.././models/User');

//Letting passport know we want to use a Local Strategy
//(log in with username/email and password)
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

// To keep auth state across HTTP requests,
// serialize and deserialize the user
//--boilerplate to serialize and deserialize:
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

//export configured passport
module.exports = passport;
