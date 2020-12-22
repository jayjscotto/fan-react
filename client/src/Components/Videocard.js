import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  //CardActions,
  Grid,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useForm from '../Hooks/Formhook';
import API from '../Utils/API';
//import { storage } from '../firebase-config';

const useStyles = makeStyles({
  root: {
    minWidth: '70%',
    margin: '1em'
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  center: {
    margin: 'auto 1em'
  },
  button: {
    margin: '.5em auto'
  },
  videoInput: {
    margin: '.5em'
  }
});

export default function SimpleCard(props) {
  const [edit, setEdit] = useState(false);
  const [videoLink, setVideoLink] = useState('')
  const classes = useStyles();

  const handleEdit = () => {
    setEdit(edit => !edit);
  }

  const getVideoId = (video) => {
    // youtube video ID's are 11 characters
    // split the youtube url
    let v = video.split('');
    // find index of video ID v param starts
    let vIndex = video.indexOf('v');
    // index where actual ID starts
    let idStart = vIndex + 2;
    //obtain the actual id that is 11 characters long
    return v.slice(idStart, (idStart + 11)).join('');
  }

    // call the API
    useEffect(() => {
      API.getVideos().then(results => {
        console.log(results);
        if (results.data.videos[props.number]) {
          setVideoLink(results.data.videos[props.number]);
        }
      });
    }, [props.number]);
  

  // const handleChange = e => {
  //   if (e.target.files[0]) {
  //     setVideo(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   if (video) {
  //     setUploadMsg('');
  //     const uploadTask = storage.ref(`videos/${video.name}`).put(video);
  //     uploadTask.on(
  //       'state_changed',
  //       snapshot => {
  //         setProgress(
  //           Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
  //         );
  //       },
  //       error => {
  //         console.log(error);
  //       },
  //       () => {
  //         storage
  //           .ref('videos')
  //           .child(video.name)
  //           .getDownloadURL()
  //           .then(url => {
  //             API.storeVideo(url, 0).then(result => {
  //               setVideo(url);
  //             });
  //           });
  //       }
  //     );
  //   } else {
  //     setUploadMsg('Please select a valid file to upload.');
  //   }
  // };

  const submitVideo = () => {
    const videoID = getVideoId(inputs.video);
    API.storeVideos({ link: videoID, number: props.number }).then(res => {
      setVideoLink(videoID);
      console.log(res)
      });
  }

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(submitVideo);

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
          {/* <Grid item>
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
          </Grid> */}
          <Grid item style={{display: 'flex', flexDirection: 'row'}}>
          <Button onClick={handleEdit} className={classes.button} variant='contained'>Edit</Button>
          {edit ? ( 
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
              onChange={handleChange}
              value={inputs.video}
              name='video'
              aria-label='YouTube Video Input'
              placeholder='YouTube link goes here!'
              className={classes.videoInput}
              />
              <Button
              variant='contained'
              type='submit'
              className={classes.button}
              >
              Submit
              </Button>
            </form>
            ) : (<></>)
          }
           
          </Grid>
          <Grid item className={classes.center}>
            {props.videoLink === null ? (
              <h3>
                Our records show not all videos for your profile are posted... Upload one here!
              </h3>
            ) : (
              <iframe
                height="250px"
                width="500px"
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${videoLink}?autoplay=0`}>
            </iframe>
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
