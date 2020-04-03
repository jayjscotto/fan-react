import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  //CardActions,
  Grid,
  CardContent,
  Button,
  Typography
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
  const [uploadMsg, setUploadMsg] = useState('');
  const [progress, setProgress] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    API.getVideo().then(video => {
      setVideo(video.data);
    });
  }, []);

  const handleChange = e => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (video) {
      setUploadMsg('');
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
              API.storeVideo(url, 0).then(result => {
                setVideo(url);
              });
            });
        }
      );
    } else {
      setUploadMsg('Please select a valid file to upload.');
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction='column'
          alignItems='center'
          alignContent='center'
          justify='center'
          spacing={8}
        >
          <Grid item>
            <input type='file' onChange={handleChange} />
          </Grid>

          <Grid
            container
            justify='center'
            alignContent='center'
            spacing={5}
            direction='row'
          >
            <Grid item>
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
              <progress value={progress} max='100' />
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant='body2' component='p' align='justify'>
              {uploadMsg}
            </Typography>
          </Grid>
          <Grid item className={classes.center}>
            {video === null ? (
              <h3>
                Our records show no video for your profile... Upload one here!
              </h3>
            ) : (
              <iframe
              width='275px'
              height='200px'
                title='user_video'
                src={video}
              ></iframe>
            )}
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
