import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { UserContext } from './UserContext';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: '#000000',
    textShadow: '-2px 2px 3px rgba(247, 239, 153,0.25)',
    fontSize: '32px'
  },
  bar: {
    background: '#FFFFFF',
    // padding: '2px'
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

const Appbar = props => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('FAN-JWT');
    localStorage.removeItem('FAN-user');
    window.location.reload();
  };

  return (
    <AppBar position='relative' className={classes.bar}>
      <Toolbar>
        <Typography className={classes.title}>
          <Link className={classes.link} to='/'>
            FreeAgentNow
          </Link>
        </Typography>
        <Link className={classes.link} to='/'>
          <Button variant='outlined' color='inherit'>
            Home
          </Button>
        </Link>
        {/* if user is true, render user's functionality */}
        {user ? (
          <Fragment>
            <Link to='/dashboard' className={classes.link}>
              <Button variant='outlined' color='inherit'>Dashboard</Button>
            </Link>
            <Link to='/' className={classes.link}>
              <Button variant='outlined' color='inherit' onClick={logout}>
                Log Out
              </Button>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link className={classes.link} to='/login'>
              <Button variant='outlined' color='inherit'>
                Login
              </Button>
            </Link>
            <Link className={classes.register} to='/register'>
              <Button variant='outlined' color='inherit'>
                Register
              </Button>
            </Link>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
