require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const isAuthenticated = require("./config/isAuthenticated");
const mongoose = require('mongoose');
const connection = mongoose.connection;
const routes = require('./router/routes');
const app = express();
const PORT = process.env.port || 5000;

// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FreeAgentNow'; 
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

connection.once('open', function callback() {
	console.log('Connected to MongoDB!');
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// auth middlewware
app.use(cookieParser(process.env.SECRET));
app.use(
  cookieSession({
    key: "FAN.sid.uid",
    signed: false,
    secret: process.env.SECRET,
    cookie: {
      maxAge: 2678400000 // 31 days
    }
  })
);
//session to keep track of user state
app.use(
  require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// error logging middleware
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use(routes);

app.listen(PORT, () => {
	console.log(`🌎 ==> Server now running on port ${PORT}!`);
});
