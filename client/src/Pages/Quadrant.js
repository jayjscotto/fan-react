import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { UserContext } from '../Components/UserContext';

const useStyles = makeStyles(theme => ({
	tile: {
		width: '50vw',
		height: '45vh',
		border: '1px solid red'
	}
}));


const Quadrant = props => {
	const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
          Resume
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
          Blog
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
					Video
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
					Network
      </Grid>
    </Grid>
  );
};


export default Quadrant;