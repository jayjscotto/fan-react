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
      margin: 'auto',
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
        marginBottom: '1em',
        border: '1px solid black',
        borderRadius: '20px',
        padding: '1em',
        width: '90%',
        margin: 'auto'
    },
    bioText: {
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        margin: 'auto auto em auto'
    },
    bioTitle: {
        textAlign: 'center'
    },
    bioTitleText: {
        textAlign: 'center',
        marginBottom: '1em'
    }
  }));
  

export default function Bio() { 
    const classes = useStyles();
    const [bio, setBio] = useState("");
    const [bioEdit, setBioEdit] = useState(false);
    

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

    const handleBioEdit = () => {
        setBioEdit(bioEdit => !bioEdit);
    }

    return (
        <Grid
        container
        alignItems='center'
        direction='column'
        justify='center'
        wrap='wrap'
      >
        <Grid item style={{alignContent: 'center'}}>
            <Typography variant='h3' component='h3' className={classes.bioTitle}>Bio</Typography>
            <Typography variant='body1' component='p' className={classes.bioTitleText}>Tell us about yourself</Typography>
            <Button onClick={handleBioEdit} style={{margin: '1em'}} variant='contained'>Edit</Button>
            <Typography variant='body1' component='p' className={classes.bioText}>{bio}</Typography> 
            {bioEdit ? (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                    multiline="true"
                    onChange={handleChange}
                    value={inputs.bio}
                    name='bio'
                    aria-label='Bio Input'
                    rows={12}
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
                ) : (
                <> </>)
            }
            


        </Grid>


      </Grid>
    );
}

