const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const controller = require('../controller/UserController');


router.get('/videos', passport.authenticate('jwt', { session: false }), controller.getVideos);

router.post('/videos', passport.authenticate('jwt', { session: false }), controller.storeVideo);

router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});


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
