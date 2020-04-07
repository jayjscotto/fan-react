import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '375px',
    margin: 'auto',
  },
  gridItem: {
    textAlign: 'center',
    margin: '0 auto'
  },
  freeagentnow: {
    fontStyle: 'italic',
  },
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
