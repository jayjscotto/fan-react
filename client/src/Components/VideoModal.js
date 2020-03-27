import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { Typography } from '@material-ui/core';

const VideoModal = props => {
  const [video, setVideo] = useState(true);

  useEffect(() => {
    // method to get videoURL serverside
    API.getVideos().then(videos => setVideo(videos.data[0]));
  }, []);

  // YKvGhAhikj4
  return (
    <>
      {video ? (
        <iframe
          style={{ margin: 'auto' }}
          title='FAN-Video'
          src={`https://www.youtube.com/embed/${video}`}
          width='100%'
          height='450px'
          frameBorder='0'
          allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        <>
        <Typography variant='h3' component='h3' style={{ margin: 'auto 1em', textAlign: 'justify' }}>
          Looks like there's nothing here... Add some videos via the
          Dashboard!
        </Typography>
      </>
      )}
    </>
  );
};

export default VideoModal;
