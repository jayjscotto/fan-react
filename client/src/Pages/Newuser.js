import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '1rem',
  '@media (min-width:300px)': {
    fontSize: '2.25rem',
  },
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  '@media (min-width:960px)': {
    fontSize: '4rem',
  },
  '@media (min-width:1280px)': {
    fontSize: '5rem',
  },
  '@media (min-width:1920px)': {
      fontSize: '6rem'
  },
};

const useStyles = makeStyles((theme) => ({
    freeagentnow: {
        fontStyle: 'italic',
      },
    container: {
        height: '90vh',
        [theme.breakpoints.up('lg')]: {
            width: '70%',
            margin: 'auto',
          },
    },
    userText: {
        margin: '6em auto 1em auto',
        width: '100%'
    },
    button: {
        margin: '0 auto',
        background: '#32CD32',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '2em',
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

const Newuser = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <Grid container direction="column" className={classes.container}>
            <Grid item className={classes.userText}>
                <Typography variant='h1' component='h1'>
                    Tell your story.
                </Typography >
                <Typography variant='h1' component='h1'>
                    Get seen. 
                </Typography>
                <Typography variant='h1' component='h1'>
                    Get heard.
                </Typography>
                <Typography variant='h1' component='h1'>
                    Get signed.
                </Typography>
                <Typography variant='h1' component='h1'>
                    Welcome to <span className={classes.freeagentnow}>FreeAgentNow</span>
                </Typography>
            </Grid>
            <Grid item style={{textAlign: 'center'}}>
              <Link to='/register' className={classes.link}>
                  <Button className={classes.button}>
                      Join Us
                  </Button>
                </Link>
            </Grid>
        </Grid>
        </ThemeProvider>
    )

}

export default Newuser;

//<Link to='/about' className={classes.link}>