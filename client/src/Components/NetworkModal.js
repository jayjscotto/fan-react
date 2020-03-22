import React, { useContext } from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from '../Utils/API';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { UserContext } from '../Components/UserContext';

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

  // YKvGhAhikj4
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
          <Link target="_blank" color='inherit' className={classes.networkLink} href={networkLinks.facebook}>
            <FacebookIcon fontSize='large' />
            <Typography>Jason's Facebook Profile</Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link target="_blank" color='inherit' className={classes.networkLink} href={networkLinks.twitter}>
            <TwitterIcon fontSize='large' />
            <Typography>@JasonScotto</Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link target="_blank" color='inherit' classes={classes.networkLink} href={networkLinks.linkedin}>
            <LinkedInIcon fontSize='large' />
            <Typography>Jason's LinkedIn</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={11} lg={11} md={11} sm={11}>
        <a class="twitter-timeline" href="https://twitter.com/JasonScotto?ref_src=twsrc%5Etfw">Tweets by JasonScotto</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Grid>
      </Grid>
    </>
  );
};

export default NetworkModal;
