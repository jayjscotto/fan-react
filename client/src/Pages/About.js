import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    textAlign: 'center'
  },
  description: {
    margin: '.5em auto',
    [theme.breakpoints.up('xl')]: {
      width: '70%',
      
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
      width: '70%'
    },
    [theme.breakpoints.down('md')]: {
      width: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    textAlign: 'center',
  },
  descriptionText: {
    marginBottom: '1em',
    [theme.breakpoints.only('xl')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.25em',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '.75em',
    },
  },
  title1: {
    margin: '1.5em auto 0 auto',
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
      <Typography className={classes.title1} variant='h2' component='h2'>
        {/* Putting Control Back Into The Hands of The Job Seeker */}
        About <em>FreeAgentNow</em>
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
          <Typography className={classes.descriptionText} variant='h4' component='h4'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>,  everything we do is about redefining how athletes and coaches achieve their career aspirations. We redefine this through a user-friendly technology platform that is interchangeable from player-to-player; coach-to-coach; team-to-team. At FreeAgentNow, we have created a unique way for individuals, teams and organizations, to distinguish themselves in their marketplace.
          </Typography>

          <Typography className={classes.descriptionText} variant='h2' component='h2'>
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
