import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Circle from '../images/golden_circle.png';

const useStyles = makeStyles(theme => ({
  logo: {
    width: '600px',
    margin: 'auto'
  },
  gridItem: {
    textAlign: 'center'
  },
  description: {
    margin: '0.75em auto',
    width: '75%',
    textAlign: 'center'
  },
  title: {}
}));

const About = props => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={3}
        xl={8}
        lg={10}
        md={12}
        sm={12}
        wrap='wrap'
        direction='row'
        justify='space-around'
        style={{ margin: '2em auto', minWidth: '60vw' }}
      >
        <Typography className={classes.description} variant='h3' component='h3'>
          Putting Control Back Into The Hands of The Job Seeker
        </Typography>
        <Grid className={classes.gridItem} item xl={8} lg={10} md={12} sm={12}>
          <img className={classes.logo} src={Circle} alt='Golden Circle' />
        </Grid>
        {/* <Grid className={classes.gridItem} item xl={4} lg={4} md={6} sm={8}> */}
        <Typography className={classes.description} variant='h6' component='h6'>
          At FreeAgentNow, we believe the job market is real. At FreeAgentNow,
          it is time to believe your dreams can come true.
        </Typography>
        <Typography className={classes.description} variant='h6' component='h6'>
          At FreeAgentNow, your resume is no longer a dead piece of paper. At
          FreeAgentNow, your resume becomes a living document.
        </Typography>
        <Typography className={classes.description} variant='h6' component='h6'>
          FreeAgentNow revolutionizes the ability for the job seeker by
          combining resume posting, blogging and video up-linking. Job seekers
          will have the ability to add their own flavor to their resume in order
          to distinguish themselves in the marketplace.
        </Typography>
        <Typography className={classes.description} variant='h6' component='h6'>
          FreeAgentNow generates Return On Investment for companies by reducing
          effort, money and time spent on acquiring the right person, for the
          right job. FreeAgentNow matches job openings to qualified job seekers.
        </Typography>
        <Typography className={classes.description} variant='h6' component='h6'>
          FreeAgentNow provides job seekers the opportunity to have their resume
          placed in front of the hiring community in an adaptable and
          customizable format.
        </Typography>
        <Typography className={classes.description} variant='h6' component='h6'>
          At FreeAgentNow, we put the control back into the hands of the job
          seeker.
        </Typography>

        {/* </Grid> */}
        {/* <Grid className={classes.gridItem} item xl={4} lg={4} md={6} sm={8}>
          hello1
        </Grid>
        <Grid className={classes.gridItem} item xl={4} lg={4} md={10} sm={8}>
          hello2
        </Grid> */}
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Typography
            className={classes.gridItem}
            variant='body1'
            component='p'
          >
            Closed Alpha 1.1.0
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
