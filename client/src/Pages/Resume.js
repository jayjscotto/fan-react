import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import resumeImg from '../images/JasonScottoResume.pdf';
import API from '../Utils/API';
import { storage } from '../firebase-config';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  resume: {
    margin: 'auto',
    height: '65vh',
    width: '90vw'
  }
}));

export default function Resume() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const classes = useStyles();

  // may be able to get URL back from firebase and store in Mongo and call that string on useEffect to populate user's resume

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

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
            console.log(url)
            setUrl(url);
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
        My Resume
      </Typography>
      <Typography variant='p' component='h3'>
        Upload your resume (PDF files only) to display on your FANFile.
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
        </Grid>
        <Grid item>
          {url ? (
            <iframe
              className={classes.resume}
              title='user_resume'
              src={url || 'http://via.placeholder.com/400x300'}
            ></iframe>
          ) : (
            <>
              <h1>No Resume Here</h1>
            </>
          )}
        </Grid>
      </Grid>

      <Grid container alignItems='center' justify='center'></Grid>
    </Grid>
  );
}
