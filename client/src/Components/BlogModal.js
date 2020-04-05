import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
      console.log(posts)
      setBlogPosts(posts.data);
    });
  }, []);

  return (
    <>
      {blogPosts.length > 0 ? (
        blogPosts.map((post, index) => {
          return (
            <div key={index} className={classes.blogPost}>
              <h1>{post.title}</h1>
              <p style={{ textAlign: 'justify' }}>{post.post}</p>
              <hr></hr>
            </div>
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
    </>
  );
};

export default BlogModal;
