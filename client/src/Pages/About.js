import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '600px',
    margin: 'auto',
  },
  gridItem: {
    textAlign: 'center',

  },
  description: {
    margin: '0.5em auto 0 auto',
    width: '60%',
    textAlign: 'center',
  },
  title1: {
    margin: '1em auto 0 auto',
    width: '70%',
    textAlign: 'center',
  },
  title2: {
    margin: 'auto',
    width: '70%',
    textAlign: 'center',
  },
  logo: {
    width: '375px',
    margin: 'auto',
  },
  freeagentnow: {
    fontStyle: 'italic',
  },
}));

const About = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title1} variant='h4' component='h4'>
        Putting Control Back Into The Hands of The Job Seeker
      </Typography>
      {/* <Typography className={classes.title2} variant='h4' component='h4'>
       
      </Typography> */}
      <Grid
        container
        spacing={3}
        wrap='wrap'
        direction='row'
        justify='space-around'
        style={{ margin: '1em auto', minWidth: '60vw' }}
      >
        <Grid item className={classes.description}>
          <Typography variant='h6' component='h6'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>, we
            believe the job market is real.
          </Typography>

          <Typography variant='h6' component='h6'>
            At <span className={classes.freeagentnow}>FreeAgentNow</span>, it is time to believe your dreams can come true.
          </Typography>
        </Grid>

        <Grid item className={classes.description}>
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
            posting, blogging and video uploading.
          
            Job seekers will have the ability to add their own flavor to their
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
        </Grid>
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
    </>
  );
};

export default About;
