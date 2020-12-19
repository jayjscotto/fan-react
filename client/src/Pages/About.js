import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    textAlign: 'center'
  },
  description: {
    margin: '.5em auto',
    [theme.breakpoints.down('xl')]: {
      width: '70%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '70%'
    },
    [theme.breakpoints.down('md')]: {
      width: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
    textAlign: 'center',
  },
  title1: {
    margin: '1em auto 0 auto',
    width: '80%',
    textAlign: 'center',
  },
  title2: {
    margin: 'auto',
    width: '70%',
    textAlign: 'center',
  },
  freeagentnow: {
    fontStyle: 'italic',
  },
  gridContainer: {
    height: '90vh'
  }
}));

const About = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Typography className={classes.title1} variant='h4' component='h4'>
        Putting Control Back Into The Hands of The Job Seeker
      </Typography>
      {/* <Typography className={classes.title2} variant='h4' component='h4'>
       
      </Typography> */}
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        style={{ margin: '1em auto', minWidth: '60vw' }}
      >
        <Grid item className={classes.description}>
          <Typography variant='h5' component='h5'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>,  everything we do is about redefining how athletes and coaches achieve their career aspirations. We redefine this through a user-friendly technology platform that is interchangeable from player-to-player; coach-to-coach; team-to-team. At FreeAgentNow, we have created a unique way for individuals, teams and organizations, to distinguish themselves in their marketplace.
          </Typography>

          <Typography variant='h4' component='h4'>
          Their space. Unbiased ownership. Now.
          </Typography>
        </Grid>

        {/* <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>, your
            resume is no longer a dead piece of paper.
          </Typography>
          <Typography variant='h6' component='h6'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>, your
            resume becomes a living document.
          </Typography>
        </Grid>

        <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            <span className={classes.freeagentnow}>FreeAgentNow </span>
             revolutionizes the ability for the job seeker by combining resume
            posting, blogging and video uploading. Job seekers will have the ability to add their own flavor to their
            resume in order to distinguish themselves in the marketplace.
          </Typography>
        </Grid>

        <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            <span className={classes.freeagentnow}>FreeAgentNow</span> generates Return On Investment for companies by reducing effort, money and time spent on acquiring the right person, for the right job.
          </Typography>
        </Grid>

        <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            <span className={classes.freeagentnow}>FreeAgentNow</span> matches
            job openings to qualified job seekers. 
            <span className={classes.freeagentnow}> FreeAgentNow</span> provides job seekers the opportunity to have their resume placed in front of the hiring community in an adaptable and customizable format.
          </Typography>
        </Grid>

        <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>, we
            put the control back into the hands of the job seeker.
          </Typography> 
        </Grid>*/}
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Typography
            className={classes.gridItem}
            variant='body1'
            component='p'
          >
            <span className={classes.freeagentnow}>FreeAgentNow</span> Closed
            Alpha 1.1.0
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
