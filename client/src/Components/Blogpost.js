import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const useStyles = makeStyles(theme => ({
    post: {
      margin: 'auto',
      whiteSpace: 'pre-wrap'
    },
    alignRight: {
      textAlign: 'right'
    }
  }));


const Blogpost = props => {
  const classes = useStyles();

    const { post, title, date, trophies } = props

  return (
    <Paper style={{padding: '1em', margin: '1em', alignContent:'center', justifyContent:'center'}} elevation={3}>
      <Grid container>

        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
         <Typography variant='h5' component='h5'>
            {title}
         </Typography>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <Typography className={classes.alignRight} variant='body1' component='p'>
            {date}
          </Typography>
        </Grid>

        <Grid item xl={10} lg={10} md={11} sm={11}>
          <Typography className={classes.post} variant='body1' component='p'>
            {post}
          </Typography>
        </Grid>

        <Grid  item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.alignRight} variant='body1' component='p'>
           <WhatshotIcon/> {trophies} 
          </Typography>
          
        </Grid>

      </Grid>
    </Paper>
  )
}

export default Blogpost;