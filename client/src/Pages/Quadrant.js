import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { UserContext } from '../Components/UserContext';

const useStyles = makeStyles(theme => ({
	tile: {
		display: 'flex',
		width: '50vw',
		height: '45vh',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: '#CCCCCC',
			cursor: 'pointer',
			border: '1px solid black'
		}
	},
	cardText: {
		textAlign: 'center',
		margin: '0 auto'
	}
}));


const Quadrant = props => {
	const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
          <Typography className={classes.cardText} variant='h1'>Resume</Typography>
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
          <Typography className={classes.cardText} variant='h1'>Blog</Typography>
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
					<Typography className={classes.cardText} variant='h1'>Video</Typography>
      </Grid>
      <Grid className={classes.tile} item xl={6} lg={6} md={6} sm={6}>
					<Typography className={classes.cardText} variant='h1'>Network</Typography>
      </Grid>
    </Grid>
  );
};


export default Quadrant;