const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  resumeName: {
    type: String,
    default: "none",
    required: true
  },
  resumeData: {
    type: String,
    required: true
  },
});


module.exports = mongoose.model('Resume', ResumeSchema);
