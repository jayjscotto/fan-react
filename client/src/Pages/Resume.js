import React, { useState, useEffect, useContext } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import API from '../Utils/API';
import { storage } from '../firebase-config';
import { UserContext } from '../Components/UserContext';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  cardPhoto: {
    margin: 'auto',
    height: '275px',
    width: '375px'
  }
}));

export default function Resume() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState();
  const [progress, setProgress] = useState(0);

  const { user } = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => { 
    API.getResume().then(link => {
      if (link.data) {
        setUrl(link.data);
      }
    })
  }, //eslint-disable-next-line
  [])

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // create a reference to the image, and then put the image into storage on firebase
  // then the firebase url is returned and saved in the DB 
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            API.storeResume(url).then(result => setUrl(url));
          });
      }
    );
  };

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
        Resume
      </Typography>
      <Typography component='h3'>
        Fill out your resume and upload your photo to display your stats
      </Typography>
      <Grid
        container
        alignItems='center'
        alignContent='center'
        justify='center'
        spacing={4}
      >
        <Grid item>
          <input type='file' onChange={handleChange} />
          <Button
            onClick={handleUpload}
            variant='contained'
            color='default'
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          <progress value={progress} max="100"/>
        </Grid>
        <Grid item>
          {url ? (
            <img
              className={classes.cardPhoto}
              alt='user_card_photo'
              src={url}
            ></img>
          ) : (
            <>
              <h1>No Image Here</h1>
            </>
          )}
        </Grid>
      </Grid>
      
      <Grid container alignItems='center' justify='center'></Grid>
    </Grid>
  );
}
