const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const controller = require('../controller/UserController');

// router.post('/resume', passport.authenticate('jwt', { session: false }), controller.uploadResume);

// router.post('/profileImg', passport.authenticate('jwt', { session: false }), controller.uploadUserImage);

// function to get JSON web token
getToken = function(headers) {
	if (headers && headers.authorization) {
		const parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};

module.exports = router;

