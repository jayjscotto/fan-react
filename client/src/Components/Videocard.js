import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, FormControl, Button, Typography, TextField} from '@material-ui/core'
import useForm from '../Hooks/Formhook';
import API from '../Utils/API';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
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
  const [ edit, setEdit ] = useState(false);

  const videoEdit = () => {
    console.log(inputs)
    API.storeVideo(inputs.videoLink, props.number).then(result => API.getVideos());
  }

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(videoEdit);
  

  const saveVideo = (video) => {
    if (video) {
      // post req
    }
    setEdit(false);
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5' component='h5'>
          Video #{props.number}
        </Typography>
        <iframe title={`FAN User Video #${props.number}`} width="350" height="225" src={`https://www.youtube.com/embed/${props.videoLink}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Typography variant='body2' component='p' align='justify'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        { edit ? (
          <FormControl style={{display: 'flex'}} onSubmit={handleSubmit}>
            <TextField 
            label={`Video ${props.number} Link`}
            name="videoLink"
            onChange={handleChange}
            value={inputs.videoLink} />
            <Button 
            className={classes.center} 
            variant='contained'
            color='primary'
            type='submit'
            size='medium'>Save Video</Button>
          </FormControl>
        ) : (
          <Button className={classes.center} onClick={() => setEdit(true)}size='medium'>Edit Video</Button>
        )}
      </CardActions>
    </Card>
  );
}

// figure out a way to save the state of the video text input
// send that to the post req
// send to the back end

