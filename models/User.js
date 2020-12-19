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
	video: [{
		type: String,
		length: 11,
		
	}],
	facebook: {
		type: String,
		default: ''
	},
	twitter: {
		type: String,
		default: ''
	},
	instagram: {
		type: String,
		default: ''
	},
	resume: {
		type: String,
		default: ''
	},
	sportsDrink: {
		type: String,
		default: ''
	},
	sportsBrand: {
		type: String,
		default: ''
	},
	preGameMeal: {
		type: String,
		default: ''
	},
	favMusic: {
		type: String,
		default: ''
	},
	favDrink: {
		type: String,
		default: ''
	},
	bio: {
		type: String,
		default: ''
	},
	profilePublic: {
		type: Boolean,
		default: false
	},
},
);


UserSchema.methods.comparePassword = function(passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch) {
		if (err) {
			return cb(err);
		}
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);