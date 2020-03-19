import React, { useState, useEffect, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import NetworkCard from '../Components/NetworkCard';
import { UserContext } from '../Components/UserContext';

const Networks = props => {

  const { user } = useContext(UserContext);

  const networkLinks = {
    facebook: user.facebook,
    twitter: user.twitter,
    linkedin: user.linkedin
  }

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      wrap='wrap'
      style={{ minHeight: '50vh', minWidth: '50vw', margin: '2em auto' }}
    >
      <Typography variant='h3' component='h3'>
        My Social Networks
      </Typography>
      <Grid
        container
        alignItems='center'
        direction='row'
        justify='center'
        wrap='wrap'
      >
          <Grid item>
            <NetworkCard
              networkName='Facebook'
              dbNetworkLink={networkLinks.facebook}
            />
            <NetworkCard
              networkName='Twitter'
              dbNetworkLink={networkLinks.twitter}
            />
            <NetworkCard
              networkName='LinkedIn'
              dbNetworkLink={networkLinks.linkedin}
            />
          </Grid>
    
      </Grid>
    </Grid>
  );
};

export default Networks;
