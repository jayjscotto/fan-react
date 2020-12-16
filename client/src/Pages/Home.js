import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '80%',
    margin: 'auto',
    zIndex: '-1'
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
    [theme.breakpoints.down('xl')]: {
      width: '40%'
    },
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
  },
  gridContainer: {
    margin: '1em auto',
    padding: '1em auto',
    // border: '1px solid red',
    justifyContent: 'center',
    [theme.breakpoints.down('xl')]: {
      width: '85%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '90%'
    },
    [theme.breakpoints.down('md')]: {
      width: '95%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    }
  },
  paper: {
      width: '80%', 
      margin: '2em auto', 
      padding: '2em',
      background: 'rgba (0,0,0,0.2)',
      width: '80%',
      alignItems: 'center'
    },
  button: {
    background: '#32CD32',
    color: '#FFFFFF',
    fontWeight: '500',
    //borderRadius: '20px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.04)',
      color: '#FFFFFF',
    }
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    margin: '0 auto'
  },
}));

const Quadrant = (props) => {
  const classes = useStyles();

  return (
    <Grid container style={{height: '90vh'}}>
      <Grid container wrap='wrap' direction='row' justify='space-around' style={{ margin: '3em auto', minWidth: '60vw'}} >
        {/* <Grid className={classes.gridItem} item xl={8} lg={10} md={12} sm={12}>
          <img className={classes.logo} src={Logo} alt='FAN Logo' />
        </Grid> */}
        {/* <Typography style={{width: '85%', textTransform: 'uppercase', textAlign: 'center'}} variant='h3' component='h3'>
          Putting Control Back
        </Typography>
        <Typography style={{width: '85%', textTransform: 'uppercase', textAlign: 'center'}} variant='h3' component='h3'>
          Into The Hands Of The Job Seeker
        </Typography> */}
        <Grid className={classes.gridItem}>
          <Link to='/newuser' className={classes.link}>
            <Button className={classes.button}>
              New User? Click here
            </Button>
          </Link>
        </Grid>
      </Grid>
      {/* <Grid container className={classes.gridContainer}>
        <Grid className={classes.homeCard} item>
        <Card className='container'>
        <div style={{ borderTop: '5px solid', borderRadius: '10px', borderImageSlice: '1',
          // borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'
        }} />
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
              // borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'
              }} />
            <CardContent>
              <Typography className={classes.cardTitle} variant='h4'>Find The Right Hire</Typography>
              <Typography align='justify' variant='body1'>Often the most difficult part of running an organization of any size is finding the right people. At <span className={classes.fan}>FreeAgentNow</span>, we make sure you find the perfect employees. Rising tides lift all boats. </Typography>
            </ CardContent>
          </ Card>
        </Grid>
      </Grid> */}
  
      <Grid container className={classes.gridContainer}>
        {/* <Grid item xl={6} lg={6} md={10} sm={10}/>  */}
        <Grid item xl={6} lg={6} md={10} sm={10}> 
          <Paper elevation={3} style={{width: '80%', margin: '2em auto', padding: '2em', textAlign: 'center', alignItems: 'center'}}> 
            <Typography className={classes.cardTitle} variant='h4'>Why <em>FreeAgentNow</em></Typography>  
            <Typography className={classes.paperText} variant='body1' component='p'>Have you ever tried out for a team and felt you were not your best in that moment?</Typography>
            <Typography className={classes.paperText} variant='body1' component='p'>
              Have you ever gone through and interview process with a Coach or a
              General Manager of a team, but were not able to tell your story
              and allow your unique abilities to reverberate? </Typography>
              <Typography className={classes.paperText} variant='body1' component='p'>
              What would people remember about you that would set you apart from the competition?
              </Typography>
              <Typography className={classes.paperText} variant='body1' component='p'>
                The FreeAgentNow Team has dealt with this issue.
              </Typography>
              <Typography className={classes.paperText} variant='body1' component='p'>
                We get it. 
              </Typography>
          </Paper> 
        </Grid>
        <Grid item xl={6} lg={6} md={10} sm={10}> 
      
          <Paper elevation={3} style={{width: '80%', margin: '2em auto', padding: '2em'}}> 
            <Typography className={classes.cardTitle} variant='h4'>How We Do It</Typography>
            <Typography className={classes.paperText} variant='body1' component='p'>At FreeAgentNow, we have created the “FAN File”. A quadrant resume application that allows for a resume, a blog, videos and network connections to be easily accessed to tell a story, to market yourself, or to move the revenue needle for your company. At FreeAgentNow, the FAN File has created a unique way for the recruitment process to save effort, time and money to secure desired talent. </Typography>
          </Paper> 
        </Grid>
        {/* <Grid item xl={6} lg={6} md={10} sm={10}/> */}

        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Typography className={classes.gridItem} variant='body1' component='p'>
            <span className={classes.freeagentnow}>FreeAgentNow</span> Closed Alpha 1.1.0
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quadrant;
