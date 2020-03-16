import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));


const Quadrant = props => {
	const classes = useStyles();


  return (
    <>
    <Grid container gutter alignItems='center' justify='center' alignContent='space-around'>
      <Grid item xl={4} lg={4} md={6} sm={8}>
        hello
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={8}>
        hello1
      </Grid>
      <Grid item xl={4} lg={4} md={10} sm={8}>
        hello2
      </Grid>
    </Grid>
    <Grid container>
      <Grid item>
        hello hello
      </Grid>
    </Grid>
    </>
  );
};


export default Quadrant;