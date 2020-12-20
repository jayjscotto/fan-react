import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import API from '../Utils/API';
import { storage } from '../firebase-config';
//import { UserContext } from '../Components/UserContext';
import {
  Grid,
  Button,
  //TextField,
  Typography,
  //TextareaAutosize
} from '@material-ui/core';
//import useForm from '../Hooks/Formhook';
import Stats from '../Components/Resume/Stats';
import Bio from '../Components/Resume/Bio';
import Colorpicker from '../Components/colorPicker/Colorpicker';

const useStyles = makeStyles(theme => ({
  cardPhoto: {
    margin: 'auto',
    height: '275px',
    width: '375px'
  },
  stat: {
    border: '1px solid red',
    margin: '1em auto'
  },
  container: {
    [theme.breakpoints.down('xl')]: {
      width: '50%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '50%'
    },
    [theme.breakpoints.down('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
  }, 
  statsContainer: {
    [theme.breakpoints.down('xl')]: {
      width: '35%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '35%'
    },
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
  },
}));

export default function Resume() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState();
  const [progress, setProgress] = useState(0);

  //const { user } = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => { 
    API.getResume().then(link => {
      if (link.data) {
        setUrl(link.data);
      }
    })
  }, //eslint-disable-next-line
  [])

  const handlePhotoChange = e => {
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
      <Typography variant='body1' component='p' >
        Fill out your resume and upload your photo.
      </Typography>
      <Grid item style={{display: 'flex', flexDirection:'row', margin: '1em'}}>
        <Typography style={{marginRight: '1em'}} variant='body1' component='p'>Pick your star color:</Typography>
        <Colorpicker/>
      </Grid>
      <Grid
        container
        alignItems='center'
        alignContent='center'
        justify='center'
      >
        <Grid item>
          <input type='file' onChange={handlePhotoChange} />
          {image ?           <Button
            onClick={handleUpload}
            variant='contained'
            color='default'
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button> : <> </> }
 
          <progress style={{margin: '1em'}} value={progress} max="100"/>
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
      
      <Grid container className={classes.statsContainer} direction='row' alignItems='center' justify='center'>
          <Stats/>
      </Grid>
      <Grid container className={classes.container} direction='row' alignItems='center' justify='center'>
          <Bio/>
      </Grid>
      
    </Grid>
  );
}
