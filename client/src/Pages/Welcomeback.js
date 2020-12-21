import React, { useContext } from 'react';
import Stars from '../Components/Stars';
import logo from '../images/logo3.JPG';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../Components/UserContext';

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


const Welcomeback = (props) => {
    const { user } = useContext(UserContext);
    const classes = useStyles();

    return(
      <Grid className={classes.gridContainer}container justify='center' alignContent='center' alignItems='center'>
          <Grid item style={{margin: '1em auto'}}>
            <Paper eleavtion={3} style={{margin: '1em auto', padding: '1em'}}>
              <Typography variant='h3' component='h3'><em>Welcome Back</em> {user.name} </Typography>
              <img src={logo} alt='logo'/>
              <Stars/>
            </Paper>
        </Grid>
      </Grid>
    );
}

export default Welcomeback;