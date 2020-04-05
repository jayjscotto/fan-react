import React, { useState } from 'react';
import { Button, Grid, Paper, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useForm from '../Hooks/Formhook';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '90vw',
    height: '80vh',
    marginBottom: '2em',
    overflow: 'auto',
    borderRadius: '10px',
    padding: '1em'
  },
  buttonContainer: {
    padding: '1em',
    margin: '0 auto'
  },
  button: {
    margin: '1em 0.5em'
  },
  addFeed: {
    marginLeft: '2em'
  },
  buttonsGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  addFeedForm: {
    margin: '0 2em',
  },
  freeagentnow: {
    fontStyle: 'italic',
  },
}));

const Feed = props => {
  const classes = useStyles();
  const [buttons, setButtons] = useState([
    'Finance',
    'Sports',
    'Politics',
    'Trending'
  ]);

  const addFeedButton = () => {
    console.log(inputs.newButton);
    const newButtons = [...buttons, inputs.newButton];
    setButtons(newButtons);
  };

  const { inputs, handleChange, handleSubmit } = useForm(addFeedButton);
  return (
    <Paper className={classes.paper}>
      <Grid container wrap='wrap' direction='row'>
        <Grid
          item
          className={classes.buttonsGrid}
        
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          {buttons.map((button, index) => {
            return (
              <Grid key={index} item>
                <Button className={classes.button} variant='contained'>
                  {button}
                </Button>
              </Grid>
            );
          })}
        </Grid>

          <Grid
            item
            className={classes.addFeed}
          >
            <form
            className={classes.addFeedForm}
              onSubmit={handleSubmit}
            >
              <TextField
                name='newButton'
                value={inputs.newButton}
                label='Add to your feed'
                onChange={handleChange}
              ></TextField>
              <Button
                type='submit'
                className={classes.button}
                variant='contained'
              >
                Add Topic
              </Button>
            </form>
          </Grid>
        </Grid>

        <Grid container direction='column'>
          <Grid item style={{margin: '4em 5em', textAlign: 'center'}}>
            <Typography variant='h2' component='h2'> Feed Coming Soon </Typography>
            <Typography variant='body1' component='p'> The FAN Feed is a way to interact with other FreeAgents, follow topics of interest, and share information, stories and thoughts with the <span className={classes.freeagentnow}> FreeAgentNow </span> community. </Typography>
          </Grid>
        </Grid>

    </Paper>
  );
};

export default Feed;
