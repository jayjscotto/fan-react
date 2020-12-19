const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const controller = require('../controller/UserController');

router.get('/resume', passport.authenticate('jwt', { session: false }), controller.getResume);

router.post('/resume', passport.authenticate('jwt', { session: false }), controller.storeResume);

// router.get('/video', passport.authenticate('jwt', { session: false }), controller.getVideo);

// router.post('/video', passport.authenticate('jwt', { session: false }), controller.storeVideo);

router.get('/videos', passport.authenticate('jwt', { session: false }), controller.getVideos);

router.post('/videos', passport.authenticate('jwt', { session: false }), controller.storeVideos);

router.get('/blog', passport.authenticate('jwt', { session: false }), controller.getBlogPosts);

router.post('/blogs', passport.authenticate('jwt', { session: false }), controller.storeBlogPost);

router.get('/network', passport.authenticate('jwt', { session: false }), controller.getNetworks);

router.post('/networks', passport.authenticate('jwt', { session: false }), controller.storeNetwork);

router.get('/stats', passport.authenticate('jwt', { session: false }), controller.getStats);

router.post('/stats', passport.authenticate('jwt', { session: false }), controller.storeStats);

router.get('/bio', passport.authenticate('jwt', { session: false }), controller.getBio);

router.post('/bio', passport.authenticate('jwt', { session: false }), controller.storeBio);

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
