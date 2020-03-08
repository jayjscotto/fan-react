const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const controller = require('../controller/UserController');


router.get('/videos', controller.getVideos);

router.post('/videos', controller.storeVideo);

module.exports = router;
