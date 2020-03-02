require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const routes = require('./router/routes');

const PORT = process.env.port || 5000;

// Serve up static assets on deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// mongoDB connection 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FreeAgentNow'; 
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

// confirm connection to DB
connection.once('open', function callback() {
	console.log('Connected to MongoDB!');
});

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// error logging middleware
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// bringing in routes
app.use(routes);

// confirm server to listen on port specified above
app.listen(PORT, () => {
	console.log(`🌎 ==> Server now running on port ${PORT}!`);
});
