import React, { useState, useEffect } from 'react';
import API from '../Utils/API';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  blogPost: {
    margin: '2em'
  }
}));


const BlogModal = props => {
  const [ blogPosts, setBlogPosts ] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    API.getBlogPosts().then(posts => {
      setBlogPosts(posts.data);
    });
  }, [])


  return (
    <>
      {blogPosts ? (blogPosts.map(post => {
        return (
          <div className={classes.blogPost}>
            <h1>{post.title}</h1>
            <p style={{textAlign: 'justify'}}>{post.post}</p>
            <hr></hr>
          </div>
        )
      })) : (<></>)}
    </>
  )
}

export default BlogModal;