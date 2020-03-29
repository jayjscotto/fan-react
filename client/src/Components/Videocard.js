import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
import useForm from '../Hooks/Formhook';
import API from '../Utils/API';
import YouTube from 'react-youtube';

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
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [videoLink, setVideoLink] = useState();

  const videoEdit = () => {
    console.log(inputs);
    API.storeVideo(inputs.videoLink, props.number).then(result => {
      setEdit(false);
    });
  };

  useEffect(() => {
    API.getVideos().then(video => {
      setVideoLink(video.data);
    });
  }, []) 

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(videoEdit);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5' component='h5'>
          My FAN Video 
        </Typography>

        <YouTube className={classes.center} videoId={videoLink} opts={opts} />
        <Typography variant='body2' component='p' align='justify'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Card>
  );
}

// figure out a way to save the state of the video text input
// send that to the post req
// send to the back end
