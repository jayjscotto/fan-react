import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Videocard from '../Components/Videocard';
import API from '../Utils/API';


const Videos = props => {
  //eslint-disable-next-line
  const [video, setVideo] = useState();

  // call the API
  useEffect(() => {
    API.getVideo().then(results => {
      setVideo(results);
    });
  }, []);

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      wrap='wrap'
      style={{ minHeight: '50vh', minWidth: '50vw', margin: '2em auto' }}
    >
      <Typography variant='h3' component='h3'>
        My FAN Video
      </Typography>
      <Grid
        container
        alignItems='center'
        direction='row'
        justify='center'
        wrap='wrap'
      >
        <Grid item>
          <Videocard videoLink={video} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Videos;
