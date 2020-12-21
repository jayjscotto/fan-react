import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Blogpost from './Blogpost'

const useStyles = makeStyles(theme => ({
  blogPost: {
    margin: '2em'
  }
}));

const BlogModal = props => {
  const [blogPosts, setBlogPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    API.getBlogPosts().then(posts => {
      setBlogPosts(posts.data);
    });
  }, []);

  return (
    <Grid container style={{padding: '1em'}} justify='center' alignItems='center' alignContent='center'>
      {blogPosts.length > 0 ? (
        blogPosts.map((post, index) => {
          return (
            // <div key={index} className={classes.blogPost}>
            //   <h1>{post.title}</h1>
            //   <p style={{ textAlign: 'justify' }}>{post.post}</p>
            //   <hr></hr>
            // </div>
            
              <Grid item key={index} xl={10} lg={10} md={10} sm={11} xs={11}>
                <Blogpost title={post.title} post={post.post} date={post.date} trophies={post.trophies}/>
              </Grid>
            
            
          );
        })
      ) : (
        <>
          <Typography variant='h3' component='h3' style={{ margin: 'auto 1em', textAlign: 'justify' }}>
            Looks like there's nothing here... Add some blog posts via the
            Dashboard!
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default BlogModal;
