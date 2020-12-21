import React, { useContext, useState, useEffect } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logo from '../images/logo3.JPG';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from './UserContext';
import API from '../Utils/API';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
      height: '80vh',
      width: '80vw',
      textAlign: 'center',
      margin: 'auto',
      flexDirection: 'column',
      justifyContent: 'center',
  },
  
}));

const Stars = () => {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const [color, setColor] = useState('');

  useEffect(() => {
      API.getColor().then(color => {
          setColor(color.data.color)
      })
  }, [])

  return (

          <Grid container justify='center' alignContent='center' alignItems='center'>
            <Grid item style={{margin: '1em', display: 'flex', flexDirection: 'row', fontSize: '2rem'}}>
              <StarIcon style={{ color: `${color}`, fontSize: '3em'}}/>
              <StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
              <StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
              <StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
              <StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
            </Grid>
          </Grid>
 
  )
}

export default Stars;