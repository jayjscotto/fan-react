require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const cors = require('cors')
const PORT = process.env.PORT || 5000;

// server routes
const routes = require('./router/routes');
const user = require('./router/userRoutes');
const upload = require('./router/fileUploadRoutes');

// Serve up static assets on deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// mongoDB connection 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FreeAgentNow'; 
mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	promiseLibrary: require('bluebird')
}).then((res,err) => {
	if(!err) {
	console.log('connected!')
	}
});

// confirm connection to DB
connection.once('open', function callback() {
	console.log('Connected to MongoDB!');
});

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// error logging middleware
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// bringing in routes
app.use(routes);
app.use('/api/user', user);
app.use('/upload', upload);


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// confirm server to listen on port specified above
app.listen(PORT, () => {
	console.log(`🌎 ==> Server now running on port ${PORT}!`);
});
