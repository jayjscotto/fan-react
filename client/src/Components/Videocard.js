import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  //CardActions,
  Grid,
  CardContent,
  Button,
  Typography,
  // TextField
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import useForm from '../Hooks/Formhook';
import API from '../Utils/API';
import { storage } from '../firebase-config';

const useStyles = makeStyles({
  root: {
    minWidth: '70%',
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

export default function SimpleCard(props) {
  // const [edit, setEdit] = useState(false);
  const [video, setVideo] = useState(null);
  const [videoLink, setVideoLink] = useState();
  const [progress, setProgress] = useState(0);

  const classes = useStyles();

  // const videoEdit = () => {
  //   API.storeVideo(inputs.videoLink, props.number).then(result => {
  //     setEdit(false);
  //   });
  // };

  useEffect(() => {
    API.getVideos().then(video => {
      setVideoLink(video.data);
    });
  }, []);

  const handleChange = e => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
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
          .ref('videos')
          .child(video.name)
          .getDownloadURL()
          .then(url => {
            API.storeVideo(url, 0).then(result => setVideoLink(url));
          });
      }
    );
  };


  // // for editing fields
  // const { inputs, handleChange, handleSubmit } = useForm(videoEdit);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5' component='h5'>
          My FAN Video
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
            <progress value={progress} max='100' />
          </Grid>
          <Grid item>
            <iframe
              className={classes.center}
              title='user_video'
              src={videoLink}
            ></iframe>
          </Grid>
        </Grid>
        {/* <div dangerouslySetInnerHTML={{__html: videoLink}} /> */}
        <Typography variant='body2' component='p' align='justify'>
          {props.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        {edit ? (
          <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <TextField
              // eslint-disable-next-line
              label={`Video ${props.number} Link`}
              name='videoLink'
              onChange={handleChange}
              value={inputs.videoLink}
            />
            <Button
              className={classes.center}
              variant='contained'
              color='primary'
              type='submit'
              size='medium'
            >
              Save Video
            </Button>
          </form>
        ) : (
          <Button
            className={classes.center}
            onClick={() => setEdit(true)}
            size='medium'
          >
            Edit Video
          </Button>
        )}
      </CardActions> */}
    </Card>
  );
}

// figure out a way to save the state of the video text input
// send that to the post req
// send to the back end
