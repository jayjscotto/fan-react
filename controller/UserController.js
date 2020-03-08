const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
require('../config/passport')(passport);

// function to get JSON web token
const getToken = (headers) => {
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

module.exports = {
  storeVideo: function(req, res) {
    // get the index of the video being replaced. (number param)
    // access the videos array at that index
    // replace the incoming (link param) link with the string previously at that index
    const token = getToken(req.headers);

    if (token) {
      console.log(req.body)
      db.User.findById({ _id: req.user._id }).then(user => {
        const videos = user.videos;
        console.log(videos);
        videos[req.body.videoNumber] = req.body.videoLink;
        console.log(videos);

        db.User.findByIdAndUpdate({ _id: req.user._id }, { $set: { videos }}).then(updated => res.json(updated))
        
      })
      // db.User.findByIdAndUpdate(req.user._id, { $set: { videos.: link }}).then(results => {
      //   console.log(results);
      //   res.json(results);
      // });
    } else {  
      // else return error
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getVideos: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      // get the user from the request and send the videos array as response
      db.User.findById({ _id: req.user._id }).then(results => {
        console.log(results.videos);
        res.json(results.videos);
      });
    } else {
      // else return error
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
   
  }
}
// getVideos and storeVideo