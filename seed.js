const mongoose = require('mongoose');
const db = require('./models');
const connection = mongoose.connection;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/FreeAgentNow';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

connection.once('open', function callback() {
  console.log('Connected to MongoDB SEEEEEDING NOW!');
});

db.User.create({
  email: 'roger@freeagentnow.com',
  password: 'frankturner1234'
})
  .then(created => console.log(created))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
