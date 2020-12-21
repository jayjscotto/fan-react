const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  post: { 
    type: String
  },
  trophies: {
    type: Number
  },
});


module.exports = mongoose.model('Blog', BlogSchema);
