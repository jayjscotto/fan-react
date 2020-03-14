import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { UserContext } from '../Components/UserContext';

const Quadrant = props => {
  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={6}>
          Resume
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6}>
          Blog
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6}>
					Video
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6}>
					Network
      </Grid>
    </Grid>
  );
};


export default Quadrant;