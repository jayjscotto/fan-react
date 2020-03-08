import React, {useState, useEffect} from 'react';
import {Grid, Typography, Card} from '@material-ui/core';
import Videocard from '../Components/Videocard';


const Videos = props => {
  

// call the API
// get the videos in the array

  return (
      <Grid container
      direction='column'
      alignItems='center'
      justify='center'
      wrap='wrap'
      style={{ minHeight: '50vh', minWidth:'50vw', margin: '2em auto'}}>
        <Typography variant='h3' component='h3'>
          My FAN Videos
        </Typography>
        <Grid container
        alignItems='center'
        direction='row'
        justify='center'
        wrap='wrap'
        >
          <Grid item>
            <Videocard videoLink='Du3KPVQUmLw'/>
            <Videocard videoLink='Du3KPVQUmLw'/> 
          </ Grid>
          <Grid item>
            <Videocard videoLink='Du3KPVQUmLw'/> 
            <Videocard videoLink='Du3KPVQUmLw'/> 
          </ Grid>
        </Grid>
      </Grid>
  )
}

export default Videos;