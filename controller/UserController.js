require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
require('../config/passport')(passport);
const axios = require('axios');

// function to get JSON web token
const getToken = headers => {
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
  getResume: function(req, res) {
    //console.log(req.query)
    const token = getToken(req.headers);
    if (token) {
      // db.User.findOne({ userName: req.query.username }).then(results =>
      //   res.json(results.resume)
      // );
      // get the user from the request and send the videos array as response
      db.User.findById({ _id: req.user._id }).then(results =>
        res.json(results.resume)
      );
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeResume: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      // get the user from the request and send the videos array as response
      db.User.findByIdAndUpdate(
        { _id: req.user._id },
        { $set: { resume: req.body.link } }
      ).then(updated => res.json(updated));
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeVideo: function(req, res) {
    // get the index of the video being replaced. (number param)
    // access the videos array at that index
    // replace the incoming (link param) link with the string previously at that index
    const token = getToken(req.headers);
    if (token) {
      if (req.body.videoLink !== null) {
        db.User.findByIdAndUpdate(
          { _id: req.user._id },
          { $set: { video: req.body.videoLink } }
        ).then(updated => res.json(updated));
      } else {
        res.status(404).send({ success: false, msg: 'Video not found' });
      }
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getVideo: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      // get the user from the request and send the videos array as response
      db.User.findById({ _id: req.user._id }).then((results, err) => {
        if (err) {
          throw new Error('BREAK_CHAIN');
        }
        const video_id = results.video;
        res.json(results.video);
        // const video_id = 'B4pF4bMwYYI';
        //     const getVideoURL = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.YTK}&id=${video_id}&part=player`;
        //     axios.get(getVideoURL).then(returned => {
        //       return res.json(returned.data.items[0].player.embedHtml);
        //     }).catch(function(error) {
        //       console.log(error)
        //     });
        //   }).catch(function(error){
        //     console.log('Error getting the posts');
      });
    } else {
      // else return error
      return res
        .status(403)
        .send({ success: false, msg: 'Video retreival Unauthorized.' });
    }
  },
  storeStats: function (req, res) {
    const token = getToken(req.headers);

    //console.log(req.body)

    const successResponse = () => {
      res.status(200).send({ success: true });
    };

    if (token) {
    
      var stats = req.body;
      //console.log(stats);

        db.User.findByIdAndUpdate(
        { _id: req.user._id },
        { $set: { 
          sportsDrink: stats.sportsDrink,
          sportsBrand: stats.sportsBrand,
          preGameMeal: stats.preGameMeal,
          favMusic: stats.favMusic,
          favDrink: stats.favDrink
         } 
        }).then(updated => res.status(200).send({ sucess: true })
      );
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getStats: function (req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.User.findById({ _id: req.user._id }).then(found => {
      
        const obj = {
          sportsDrink: found.sportsDrink,
          sportsBrand: found.sportsBrand,
          preGameMeal: found.preGameMeal,
          favMusic: found.favMusic,
          favDrink: found.favDrink
        }

        res.json(obj)
      })
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getBio: function(req,res) {
    const token = getToken(req.headers);
    if (token) {
   
      db.User.findById({ _id: req.user._id }).then(found => {
        const obj = {
          bio: found.bio
        }
        res.json(obj)
      })

    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeBio: function (req, res) {
  
    const token = getToken(req.headers);
    if (token) {
      var bio = req.body.bio;

      db.User.findByIdAndUpdate(
        { _id: req.user._id },
        { $set: { bio } 
        }).then(updated => res.status(200).send({ sucess: true })
      );
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeBlogPost: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      //console.log(req.body)
      //build object of blog post from request
      const blogPost = {
        user: req.user._id,
        title: req.body.title,
        post: req.body.post
      };

      db.Blog.create(blogPost).then(created => res.json(created));
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getBlogPosts: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.Blog.find({ user: req.user._id }).then(found => {
        res.json(found);
      });
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getNetworks: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.User.findById(req.user._id).then(found => {
        res.json({
          facebook: found.facebook,
          twitter: found.twitter,
          //linkedin: found.linkedin,
          instagram: found.instagram
        });
      });
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeNetwork: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      console.log(req.body);
      const successResponse = () => {
        res.status(200).send({ success: true });
      };
      const socialType = req.body.socialType;
      switch (socialType) {
        case 'Facebook':
          return db.User.findByIdAndUpdate(
            { _id: req.user._id },
            { $set: { facebook: req.body.link } }
          ).then(updated => successResponse());
        case 'Twitter':
          return db.User.findByIdAndUpdate(
            { _id: req.user._id },
            { $set: { twitter: req.body.link } }
          ).then(updated => successResponse());
        case 'Instagram':
          return db.User.findByIdAndUpdate(
            { _id: req.user._id },
            { $set: { instagram: req.body.link } }
          ).then(updated => successResponse());
      }
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  getVideos: function(req,res) {
    const token = getToken(req.headers);
    if (token) {
      db.User.findById(req.user._id).then(found => {
        res.json({
            videos: found.video
        });
      });
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  },
  storeVideos: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.User.findById(req.user._id).then(found => {
        let currentVideos = found.video;
        console.log(currentVideos);
        const newVideo = req.body.link;
        const videoIndex = req.body.number;
        currentVideos[videoIndex] = newVideo;
        console.log(currentVideos);
        db.User.findByIdAndUpdate(req.user._id, { $set: { video: currentVideos } }).then(updated => {
          return res.status(200).send( { success: true });
        });
      });
    } else {
      // else return error
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  }
};
// getVideos and storeVideo
