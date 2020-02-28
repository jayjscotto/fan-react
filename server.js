const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-sessions');
const mongoose = require('mongoose');
const routes = require('./router/routes');

const app = express();
const PORT = 5000;

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
