const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  email: {
		type: String,
		required: true,
   		unique: true
  },
	userName: {
		type: String,
		required: true,
		unique: true
  },
	password: {
		type: String,
		required: true
	},
	video: {
		type: String
	},
	facebook: {
		type: String
	},
	twitter: {
		type: String
	},
	linkedin: {
		type: String
	},
	resume: {
		type: String
	},
	sportsDrink: {
		type: String
	},
	sportBrand: {
		type: String
	},
	preGameMeal: {
		type: String
	},
	musicGenre: {
		type: String
	},
	profilePublic: {
		type: Boolean,
		default: false
	},
});


UserSchema.methods.comparePassword = function(passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch) {
		if (err) {
			return cb(err);
		}
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);