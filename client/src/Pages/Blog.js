import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import API from '../Utils/API';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: '2em'
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  center: {
    margin: 'auto 1em'
  }
});

const Blog = props => {
  const classes = useStyles();
  const [blogPosts, setBlogPosts] = useState([]);

  // // call the API
  // // get the videos in the array
  // useEffect(() => {
  //   API.getBlogPosts().then(results => {
  //     setBlogPosts(results);
  //   })
  // }, [])

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
        My FAN Blog
      </Typography>

      <Grid
        container
        alignItems='center'
        direction='row'
        justify='center'
        wrap='wrap'
      >
        {/* Map over blog posts, if blog posts don't exist, render statement saying no posts */}
        {blogPosts.map(post => (
          <>
            <Typography variant='h6' component='h6'>
              {post.title}
            </Typography>
            <Button
              className={classes.center}
              variant='contained'
              color='primary'
              size='medium'
            >
              Edit
            </Button>
          </>
        ))}
        {blogPosts.length > 0 ? (
          <></>
        ) : (
          <Grid item>
            <Typography style={{ margin: '3em' }} variant='h4' component='h4'>
              Doesn't look like there are any posts here! Add some below...
            </Typography>
          </Grid>
        )}
        <Grid item></Grid>
      </Grid>

      <Typography variant='h3' component='h3'>
        Add A Post
      </Typography>
      <Grid
        container
        alignItems='center'
        direction='column'
        justify='center'
        wrap='wrap'
      >
        <Grid item>
          <form>
          <TextField 
            label='Blog Post Title'
            name="videoLink"
            onChange={handleChange}
            value={inputs.videoLink} />
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blog;

//add form fields, console.log in API\