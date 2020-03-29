import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Logo from '../images/logo.png';

const useStyles = makeStyles(theme => ({
  logo: {
    width: '375px',
    margin: 'auto'
  },
  gridItem: {
    textAlign: 'center'
  }
}));

const Quadrant = props => {
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
        <Grid className={classes.gridItem} item xl={8} lg={10} md={12} sm={12}>
          <img className={classes.logo} src={Logo} alt='FAN Logo' />
        </Grid>
        {/* <Grid className={classes.gridItem} item xl={4} lg={4} md={6} sm={8}> */}
          <Typography style={{width: '85%', textTransform:'uppercase', textAlign: 'center'}}variant='h4' component='h4'>Putting Control Back Into The Hands Of The Job Seeker</Typography>
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
          <Typography className={classes.gridItem} variant='body1' component='p'>Closed Alpha 1.1.0</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Quadrant;
