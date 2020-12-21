import React, { useState, useEffect, Fragment } from 'react';
import {
  Grid,
  Button,
  TextField,
  Typography,
  TextareaAutosize
} from '@material-ui/core';
import API from '../Utils/API';
import useForm from '../Hooks/Formhook';
import Blogpost from '../Components/Blogpost';

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
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  blogPost: {
    width: '50vw',
    marginBottom: '1em'
  },
  blogTitle: {
    width: '50vw',
    margin: '1em auto'
  },
  button: {
    width: '25%',
    margin: 'auto',
  },
  editButton: {
    margin: '1em auto',
    width: '225px'
  },
  hr: {
    border: "0",
    clear:"both",
    display:"block",
    width: "50%",               
    backgroundColor:"#000000",
    height: "1px",
  }}
);

const Blog = props => {
  const classes = useStyles();
  const [blogPosts, setBlogPosts] = useState([]);


  //update state to show post so the component re-renders
  //send the blog post to the DB on a post request via the API
  const submitBlog = () => {
    const post = {title: inputs.blogTitle, post: inputs.blogPost}

    API.storeBlogPost({title: inputs.blogTitle, post: inputs.blogPost, date: new Date().toDateString()}).then(newPost => {
      inputs.blogTitle = ''
      inputs.blogPost = ''
      setBlogPosts([...blogPosts, post]);
    })
  };

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(submitBlog);

  // call the API
  // get the videos in the array
  useEffect(() => {
    API.getBlogPosts().then(results => {
      //console.log(results.data[0].post)
      setBlogPosts(results.data);
    });
  }, [])

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
        direction='column'
        justify='center'
        wrap='wrap'
      >
         {/* map over blog posts  */}
         {(blogPosts.length) ? blogPosts.map((post, index) => (
          <Grid style={{padding: '1em'}} item xl={8} lg={8} md={10} sm={10} xs={11} key={index}>
            {/* <Typography variant='h5' component='h5'>
              {post.title}
            </Typography>
            <Typography style={{width:'60%', whiteSpace: 'pre-wrap'}} align='justify' variant='body1' component='p'>
              {post.post}
            </Typography>
            <Typography style={{width:'60%'}} align='justify' variant='body1' component='p'>
              {post.trophies}
            </Typography>
            <Typography style={{width:'60%'}} align='justify' variant='body1' component='p'>
              Date : {post.date}
            </Typography> */}
            <Blogpost title={post.title} post={post.post} date={post.date} trophies={post.trophies}/>
            {/* <Button
              className={classes.editButton}
              variant='contained'
              color='primary'
              size='medium'
            >
              Edit ( Coming Soon )
            </Button> */}
          </Grid>
        )) : (
          <Grid item>
            <Typography style={{ margin: '3em' }} variant='h4' component='h4'>
              Doesn't look like there are any posts here! Add some below...
            </Typography>
          </Grid>
        )}
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
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              label='Blog Post Title'
              name='blogTitle'
              onChange={handleChange}
              value={inputs.blogTitle}
              className={classes.blogTitle}
            />
            <TextareaAutosize
              onChange={handleChange}
              value={inputs.blogPost}
              name='blogPost'
              aria-label='blog post input'
              rowsMin={25}
              placeholder='Blog Post goes here!'
              className={classes.blogPost}
            />
            <Button
              variant='contained'
              type='submit'
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>


      </Grid>
    </Grid>
  );
};

export default Blog;

//add form fields, console.log in API\
