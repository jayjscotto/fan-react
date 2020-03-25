import React, { useContext } from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { UserContext } from './UserContext';
import Twitter from './TwitterEmbed';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '2em auto'
  },
  title: {
    margin: '0.25em auto'
  },
  networkGrid: {
    textAlign: 'center'
  },
  networkLink: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

const NetworkModal = props => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const networkLinks = {
    facebook: user.facebook,
    twitter: user.twitter,
    linkedin: user.linkedin
  }

  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Typography className={classes.title} variant='h3'> Networks: </Typography>
      <Grid
        className={classes.root}
        container
        spacing={5}
        alignItems='center'
        alignContent='space-between'
        fullWidth
      >
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link target="_blank" color='inherit' className={classes.networkLink} href={`https://facebook.com/${networkLinks.facebook}`}>
            <FacebookIcon fontSize='large' />
            <Typography>Jason's Facebook Profile</Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link target="_blank" color='inherit' className={classes.networkLink} href={`https://twitter.com/${networkLinks.twitter}`}>
            <TwitterIcon fontSize='large' />
            <Typography>@JasonScotto </Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link target="_blank" color='inherit' classes={classes.networkLink} href={`https:/linkedin.com/in/${networkLinks.linkedin}`}>
            <LinkedInIcon fontSize='large' />
            <Typography>Jason's LinkedIn</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container alignContent='center'>
        <Grid item style={{margin: 'auto'}}xl={11} lg={11} md={11} sm={11}>
          <Twitter screenName={networkLinks.twitter}/>
        </Grid>
      </Grid>
    </>
  );
};

export default NetworkModal;
