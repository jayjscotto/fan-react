import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import NetworkCard from '../Components/NetworkCard';
import API from '../Utils/API';

const Networks = props => {
  const [networks, setNetworks] =  useState({});

  useEffect(() => {
    API.getNetworks().then(networks => {
      console.log(networks.data);
      setNetworks({
        facebook: networks.data.facebook,
        twitter: networks.data.twitter,
        linkedin: networks.data.linkedin
      })
    })
  }, [])

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
      <Typography align='center' variant='body1' component='p'>
          Username after the website URL (ex. https://twitter.com/TomBrady - the username would be TomBrady)
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
              dbNetworkLink={networks.facebook}
            />
            <NetworkCard
              networkName='Twitter'
              dbNetworkLink={networks.twitter}
            />
            <NetworkCard
              networkName='LinkedIn'
              dbNetworkLink={networks.linkedin}
            />
          </Grid>
    
      </Grid>
    </Grid>
  );
};

export default Networks;
