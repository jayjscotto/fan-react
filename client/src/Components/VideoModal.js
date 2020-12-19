import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  //Typography 
  } from '@material-ui/core';
//import YouTube from 'react-youtube';

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
  },
  videoPlayer: {
    margin: 'auto'
  }
});

const VideoModal = props => {
  //const [video, setVideo] = useState(true);
  const [videos, setVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    API.getVideos().then(videos => {
      setVideos(videos.data.videos);
    });
  }, []);

  // const opts = {
  //   height: '375',
  //   width: '625',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0
  //   }
  // };

  return (
    <Grid container alignContent='center' justify='center'>

      <Grid item style={{ margin: 'auto', textAlign:'center' }} xl={6} lg={6} md={10} sm={12}>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}

        <iframe className={classes.videoPlayer}
          height="375px"
          width="625px"
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${videos[0]}?autoplay=0`}>
        </iframe>
      </Grid>

      <Grid item style={{ margin: 'auto', textAlign:'center' }} xl={6} lg={6} md={10} sm={12}>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
        <iframe className='video'
          height="375px"
          width="625px"
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${videos[1]}?autoplay=0`}>
        </iframe>
      </Grid>

      <Grid item style={{ margin: 'auto', textAlign:'center' }} xl={6} lg={6} md={10} sm={12}>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
        <iframe className={classes.videoPlayer}
          height="375px"
          width="625px"
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${videos[2]}?autoplay=0`}>
        </iframe>
      </Grid>

      <Grid item style={{ margin: 'auto', textAlign:'center' }} xl={6} lg={6} md={10} sm={12}>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />  */}
        <iframe className={classes.videoPlayer}
          height="375px"
          width="625px"
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${videos[3]}?autoplay=0`}>
        </iframe>
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
