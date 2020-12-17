import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import API from '../../Utils/API';
import { storage } from '../../firebase-config';
import {
  Grid,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import useForm from '../../Hooks/Formhook';

const useStyles = makeStyles(theme => ({
    button: {
      margin: '1.5em auto'
    },
    cardPhoto: {
      margin: 'auto',
      height: '275px',
      width: '375px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    bio: {
        width: '35vw',
        marginBottom: '1em',
        border: '1px solid black',
        borderRadius: '20px',
        padding: '1em'
    },
    bioText: {
        whiteSpace: 'pre-wrap',
        textAlign: 'center'
    }
  }));
  

export default function Bio() { 
    const classes = useStyles();
    const [bio, setBio] = useState("");

    useEffect(() => {
        API.getBio().then(bio => {
            console.log(bio.data.bio)
            if (bio.data) {
                setBio(bio.data.bio);
            }
        });
    }, []);

    const submitBio = () => {
        console.log(inputs.bio)
        API.storeBio({ bio: inputs.bio }).then(res => setBio(inputs.bio))
    }
    // for editing fields
    const { inputs, handleChange, handleSubmit } = useForm(submitBio);

    return (
        <Grid
        container
        alignItems='center'
        direction='column'
        justify='center'
        wrap='wrap'
      >
        <Grid item>
            <Typography variant='h3' component='h3'>Bio</Typography>
            <Typography variant='body1' component='p' className={classes.bioText}>{bio}</Typography>
        </Grid>
        <Grid item>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              multiline="true"
              onChange={handleChange}
              value={inputs.bio}
              name='bio'
              aria-label='Bio Input'
              rows={25}
              placeholder='Bio goes here!'
              className={classes.bio}
            />
            <Button
              variant='contained'
              type='submit'
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>


      </Grid>
    );
}

