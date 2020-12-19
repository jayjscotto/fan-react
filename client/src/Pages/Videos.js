import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Videocard from '../Components/Videocard';

const Videos = props => {
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
        <Grid item xl={5} lg={5} md={6} sm={10}>
          <Videocard number={0} />
        </Grid>
        <Grid item xl={5} lg={5} md={6} sm={10}>
          <Videocard number={1} />
        </Grid>
        <Grid item xl={5} lg={5} md={6} sm={10}>
          <Videocard number={2} />
        </Grid>
        <Grid item xl={5} lg={5} md={6} sm={10}>
          <Videocard number={3} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Videos;
