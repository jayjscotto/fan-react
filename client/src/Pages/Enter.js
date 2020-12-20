import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: '48px',
        marginTop: '45vh',
        background: '#32CD32',
        color: '#FFFFFF',
        width: '20vw',
        height: '15vh',
        borderRadius: '20px',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          background: '#32CD32',
          transform: 'scale(1.04)',
          color: '#FFFFFF',
        }
      },
    gridItem: {
        height: '80vh',
        width: '80vw',
        textAlign: 'center',
        margin: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: '#000000',
        margin: 'auto',
        fontWeight: '500',
        fontSize: '4em',
    },
}));

const Enter = (props) => {
    const classes = useStyles();
    return(
        <Grid container justify='center' alignContent='center' alignItems='center'>
            <Grid item className={classes.gridItem}>
                <Link to='/home' className={classes.link}>
                    <Button className={classes.button}>
                        Enter
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Enter;