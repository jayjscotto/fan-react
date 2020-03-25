import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../Components/Card';
import Feed from '../Components/Feed';

const Dashboard = props => (
  <Grid
    container
    direction='column'
    alignItems='center'
    justify='center'
    style={{ minHeight: '100vh', marginTop: '2em' }}
  >
    {/* Profile Editing */}
    <Typography variant='h3' component='h3'>
      My FAN Profile
    </Typography>
    <Grid
      container
      spacing={3}
      xl={8}
      lg={10}
      md={12}
      sm={12}
      wrap='wrap'
      direction='row'
      justify='space-around'
      style={{ margin: '2em auto', minWidth: '60vw' }}
    >
      <Grid item>
        <Card
          title='Resume'
          title2='Showcase your professional history'
          description='A resume can be seen as a formality, but more importantly, it is one of the best ways to give an employer an overview of your professional and educational history. It also allows the job seeker to showcase valuable and important achievements. Feel free to formally show off your home runs.'
          buttonTitle='Add/Edit Your Resume'
          link='resume'
        />
      </Grid>
      <Grid item>
        <Card
          title='Blog'
          title2='Give insight to who you are'
          description='Add blog posts to showcase a deeper version of yourself. If you are interested about finance, write about the state of the market, or trends you are seeing. If you are interested in tech, write about new start-ups or innovative inventions that just came out. Let the people know who you are.'
          buttonTitle='Go to the blog'
          link='blog'
        />
      </Grid>
      <Grid item>
        <Card
          title='Videos'
          title2='Let employers get to know you'
          description='FAN Videos allows you to upload video links to give employers the opportunity to see and hear exactly who you are.'
          buttonTitle='Add/Edit Your Videos'
          link='videos'
        />
      </Grid>
      <Grid item>
        <Card
          title='Networks'
          title2='Broadcast your networks'
          description='FAN Networks is dedicated to showcasing your network across the board. Link all of your social media here. Coming Soon: FAN Connections'
          buttonTitle='Link Your Social Networks'
          link='network'
        />
      </Grid>
    </Grid>
    {/* News Feed */}
    <Typography gutterBottom variant='h3' component='h3'>
      My FAN Feed
    </Typography>
    <Grid container direction='column' alignItems='center' justify='center'>
      <Grid item><Feed /></Grid>
    </Grid>
  </Grid>
);

export default Dashboard;
