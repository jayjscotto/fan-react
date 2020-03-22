const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
const multer = require('multer');

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

module.exports = {
  uploadResume: function (req, res, next) { 
    //
    const token = getToken(req.headers);
    if (token) {
      upload.single('imageData'), (req, res, next) => {
        console.log(req.body);
        const newResume = new Image({
          imageName: req.body.imageName,
          imageData: req.file.path
        });

        newResume.save().then(result => {
          res.status(200).json({
            success: true,
            document: result
          });
        }).catch(err => next(err));
      }
    } else {  
      // else return error
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }

  },
  uploadImage: function (req, res, next) {
    //
    const token = getToken(req.headers);
    if (token) {

    } else {  
      // else return error
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }

  }
}
