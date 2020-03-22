import React, { useState, useEffect } from 'react';
import {Grid, Typography} from '@material-ui/core';
import Videocard from '../Components/Videocard';
import API from '../Utils/API';



const Videos = props => {
  const [ videos, setVideos ] = useState([])
  
// call the API
// get the videos in the array
useEffect(() => {
  API.getVideos().then(results => {
    setVideos(results);
  })
}, [])

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
            <Videocard number={1} videoLink={videos[1]}/>
            <Videocard number={2} videoLink={videos[2]}/> 
          </ Grid>
          <Grid item>
            <Videocard number={3} videoLink={videos[3]}/> 
            <Videocard number={4} videoLink={videos[4]}/> 
          </ Grid>
        </Grid>
      </Grid>
  )
}

export default Videos;