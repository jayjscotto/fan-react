import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ResumeTile from '../Components/ResumeTile';
import BlogTile from '../Components/BlogTile';
import VideoTile from '../Components/VideoTile';
import NetworkTile from '../Components/NetworkTile';

const useStyles = makeStyles(theme => ({
	container: {
    margin: 'auto',
    justifyContent: 'space-around'
	}
}));


const Quadrant = props => {
	const classes = useStyles();


  return (
    <Grid container className={classes.container} lg={10} xl={8}>
      <ResumeTile/>
      <BlogTile />
      <VideoTile />
      <NetworkTile />
    </Grid>
  );
};


export default Quadrant;