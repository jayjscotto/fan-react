import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ResumeTile from '../Components/ResumeTile';
import BlogTile from '../Components/BlogTile';
import VideoTile from '../Components/VideoTile';
import NetworkTile from '../Components/NetworkTile';

const useStyles = makeStyles(theme => ({
	container: {
		margin: '0 auto'
	}
}));


const Quadrant = props => {
	const classes = useStyles();


  return (
    <Grid container className={classes.container} xl={8} justify='center' alignItems='center' alignContent='center'>
      <ResumeTile />
      <BlogTile />
      <VideoTile />
      <NetworkTile />
    </Grid>
  );
};


export default Quadrant;