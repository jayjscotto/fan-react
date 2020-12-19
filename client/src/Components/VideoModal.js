import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import YouTube from 'react-youtube';

const useStyles = makeStyles({
  root: {
    minWidth: '70%',
    margin: '2em'
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  center: {
    margin: 'auto'
  },
  video: {
    margin: 'auto',
    height: '65vh',
    width: '90vw'
  }
});

const VideoModal = props => {
  const [video, setVideo] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    API.getVideo().then(video => {
      setVideo(video.data);
    });
  }, []);

  const opts = {
    height: '375',
    width: '625',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

  // YKvGhAhikj4
  return (
    <Grid container alignContent='center' justify='center'>
      <Grid item style={{ margin: 'auto' }} xl={6} lg={6} md={10} sm={12}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </Grid>

      <Grid item style={{ margin: 'auto' }} xl={6} lg={6} md={10} sm={12}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </Grid>

      <Grid item style={{ margin: 'auto' }} xl={6} lg={6} md={10} sm={12}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </Grid>

      <Grid item style={{ margin: 'auto' }} xl={6} lg={6} md={10} sm={12}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} /> 
      </Grid>
    

      {/* {video ? (
        <iframe
        height='50%'
        className={classes.video}
        title='user_video'
        src={video}
      ></iframe>
        // <div className={classes.center} dangerouslySetInnerHTML={{__html: video}} />
      ) : (
        <>
          <Typography
            variant='h3'
            component='h3'
            style={{ margin: 'auto 1em', textAlign: 'justify' }}
          >
            Looks like there's nothing here... Add some videos via the
            Dashboard!
          </Typography>
        </>
      )} */}
    </Grid>
  );
};

export default VideoModal;
