import React, { useEffect, useState } from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from './TwitterEmbed';
import API from '../Utils/API';

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
  const [networks, setNetworks] = useState({
    facebook: '',
    linkedin: '',
    twitter: ''
  });

  useEffect(() => {
    API.getNetworks().then(networks => {
      setNetworks(networks.data);
    });
  }, []);

  return (
    <>
      <Typography className={classes.title} variant='h3'>
        Networks:
      </Typography>
      <Grid
        className={classes.root}
        container
        spacing={5}
        alignItems='center'
        alignContent='space-between'
        fullWidth
      >
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            className={classes.networkLink}
            href={`https://facebook.com/${networks.facebook}`}
          >
            <FacebookIcon fontSize='large' />
            <Typography>Facebook Profile: {networks.facebook}</Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            className={classes.networkLink}
            href={`https://twitter.com/${networks.twitter}`}
          >
            <TwitterIcon fontSize='large' />
            <Typography>@{networks.twitter}</Typography>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            classes={classes.networkLink}
            href={`https:/linkedin.com/in/${networks.linkedin}`}
          >
            <LinkedInIcon fontSize='large' />
            <Typography>LinkedIn: {networks.linkedin}</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container alignContent='center'>
        <Grid item style={{ margin: 'auto' }} xl={11} lg={11} md={11} sm={11}>
          <Twitter screenName={networks.twitter} />
        </Grid>
      </Grid>
    </>
  );
};

export default NetworkModal;
