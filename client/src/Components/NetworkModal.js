import React, { useEffect, useState } from 'react';
import { Grid, Link, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Twitter from './TwitterEmbed';
import API from '../Utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '2em auto',
  },
  title: {
    margin: '0.25em auto',
  },
  networkGrid: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  networkLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    icon: {
      fontSize: '108px',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
}));

const NetworkModal = (props) => {
  const classes = useStyles();
  const [networks, setNetworks] = useState({
    facebook: '',
    linkedin: '',
    twitter: '',
  });

  useEffect(() => {
    API.getNetworks().then((networks) => {
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
        direction='row'
        alignItems='center'
        justifyContent='center'
        alignContent='space-around'
      >
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            className={classes.networkLink}
            href={`https://facebook.com/${networks.facebook}`}
          >
            <Tooltip title='Facebook' palcement='right' enterDelay={500} leaveDelay={200}>
            <FacebookIcon style={{ fontSize: '200px' }} />
            </Tooltip>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            className={classes.networkLink}
            href={`https://twitter.com/${networks.twitter}`}
          >
            <Tooltip title='Twitter' palcement='right' enterDelay={500} leaveDelay={200}>
            <TwitterIcon style={{ fontSize: '200px' }} />
            </Tooltip>
          </Link>
        </Grid>
        <Grid className={classes.networkGrid} item xl={4} lg={4} md={4} sm={4}>
          <Link
            target='_blank'
            color='inherit'
            className={classes.networkLink}
            href={`https:/linkedin.com/in/${networks.linkedin}`}
          >
            <Tooltip title='LinkedIn' palcement='right' enterDelay={500} leaveDelay={200}>
            <LinkedInIcon style={{ fontSize: '200px' }} />
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
      {/* <Grid container alignContent='center'>
        <Grid item style={{ margin: 'auto' }} xl={11} lg={11} md={11} sm={11}>
          <Twitter screenName={networks.twitter} />
        </Grid>
      </Grid> */}
    </>
  );
};

export default NetworkModal;
