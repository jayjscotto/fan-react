import React, { useState, useEffect } from 'react';
import API from '../Utils/API';


const BlogModal = props => {
  const [ blogPosts, setBlogPosts ] = useState([]);


  useEffect(() => {
    API.getBlogPosts().then(posts => {
      console.log(posts.data)
      setBlogPosts(posts.data)
    });
  }, [])


  return (
    <>
      {blogPosts ? (blogPosts.map(post => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.post}</p>
            <hr></hr>
          </>
        )
      })) : (<></>)}
    </>
  )
}

export default BlogModal;