import React, { useState, useEffect } from 'react';
import API from '../Utils/API';

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
          frameborder='0'
          allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        <></>
      )}
    </>
  );
};

export default VideoModal;
