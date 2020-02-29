import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { UserContext } from '../Context/UserContext';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: '#000000',
    textShadow: '-2px 2px 3px rgba(247, 239, 153,0.25)',
    fontSize: '32px'
  },
  bar: {
    background: '#FFFFFF',
    padding: '2px'
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    marginRight: theme.spacing(2)
  },
  register: {
    textDecoration: 'none',
    color: '#32CD32'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <AppBar position='relative' className={classes.bar}>
      <Toolbar>
        <Typography className={classes.title}>
          <Link className={classes.link} to='/'>FreeAgentNow</Link>
        </Typography>
        {/* if user is true, render user's functionality */}
        {user ? (
          <Fragment>
            <Link to='/' className={classes.link}>
              <Button variant='outlined'>Dashboard</Button>
            </Link>
            <Link className={classes.link} to='/login'>
              <Button variant='outlined' color='inherit'>
                Log Out
              </Button>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link className={classes.link} to='/'>
              <Button variant='outlined' color='inherit'>
                Home
              </Button>
            </Link>
            <Link className={classes.link} to='/login'>
              <Button variant='outlined' color='inherit'>
                Login
              </Button>
            </Link>
            <Link className={classes.register} to='/\'>
              <Button variant='outlined' color='inherit'>
                Register
              </Button>
            </Link>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}
