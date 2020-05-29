import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '375px',
    margin: 'auto',
  },
  gridItem: {
    textAlign: 'center',
    margin: '0 auto',
  },
  freeagentnow: {
    fontStyle: 'italic',
  },
  homeCard: {
    margin: '2em auto',
    [theme.breakpoints.down('lg')]: {
      width: '40%'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: '0.5em'
  },
  fan: {
    fontStyle: 'italic'
  }
}));

const Quadrant = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        style={{ margin: '2em auto', minWidth: '60vw' }}
      >
        <Grid className={classes.gridItem} item xl={8} lg={10} md={12} sm={12}>
          <img className={classes.logo} src={Logo} alt='FAN Logo' />
        </Grid>
        <Typography
          style={{
            width: '85%',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          variant='h3'
          component='h3'
        >
          Putting Control Back
        </Typography>
        <Typography
          style={{
            width: '85%',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          variant='h3'
          component='h3'
        >
          Into The Hands Of The Job Seeker
        </Typography>
      </Grid>
      <Grid container>
        <Grid className={classes.homeCard} item>
        <Card className='container'>
        <div 
          style={{ borderTop: '5px solid',
          borderRadius: '10px',
          borderImageSlice: '1',
          borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'}} />
          <CardContent>
            <Typography className={classes.cardTitle} variant='h4'>Control Your Brand</Typography>
            <Typography align='justify' variant='body1'>We understand the job seeking process is suboptimal. The resume is old, dated, and the pre-interview process is daunting. Stop quantifying yourself with antiquated accolades and howcase your brand with <span className={classes.fan}>FreeAgentNow</span>. </Typography>
          </ CardContent>
          </ Card>
        </Grid>
        <Grid className={classes.homeCard} item>
        <Card className='container'>
        <div 
          style={{ borderTop: '5px solid',
          borderRadius: '10px',
          borderImageSlice: '1',
          borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'}} />
          <CardContent>
          <Typography className={classes.cardTitle} variant='h4'>Find The Right Hire</Typography>
          <Typography align='justify' variant='body1'>Often the most difficult part of running an organization of any size is finding the right people. At <span className={classes.fan}>FreeAgentNow</span>, we make sure you find the perfect employees. Rising tides lift all boats. </Typography>
          </ CardContent>
          </ Card>
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

export default Quadrant;
