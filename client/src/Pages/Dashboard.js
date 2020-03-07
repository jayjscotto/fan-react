import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../Components/Card';

const Dashboard = props => (
  <Grid
    container
    direction='column'
    alignItems='center'
    justify='center'
    style={{ minHeight: '100vh' }}
  >
    {/* Profile Editing */}
    <Typography gutterBottom variant='h3' component='h3'>
      Add To My Profile
    </Typography>
    <Grid
      container
      spacing={3}
      xl={10}
      lg={10}
      md={8}
      sm={12}
      wrap='wrap'
      direction='row'
      justify='space-around'
    >
      <Grid item>
        <Card title='Blog' title2='Give us some insight into who you are and what you are all about' description='Add blog posts to showcase a deeper version of yourself. If you are interested about finance, write about the state of the market, or trends you are seeing. If you are interested in tech, write about new start-ups or innovative inventions that just came out. Let the people know who you are.' buttonTitle='Go to the blog' />
      </Grid>
      <Grid item>
        <Card title='Resume' title2='Add a professional resume to showcase your career and educational history.' description='' buttonTitle='Add/Edit Your Resume' />
      </Grid>
      <Grid item>
        <Card title='Video' title2='' description='' buttonTitle='' />
      </Grid>
      <Grid item>
        <Card title='Networks' title2='' description='' buttonTitle='' />
      </Grid>
    </Grid>
    {/* News Feed */}
    <Typography gutterBottom variant='h3' component='h3'>
      FAN Feed
    </Typography>
    <Grid container direction='column' alignItems='center' justify='center'>
      <Grid item>COMING SOON</Grid>
    </Grid>
  </Grid>
);

export default Dashboard;
