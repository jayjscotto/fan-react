import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { UserContext } from './UserContext';
import HomeIcon from '@material-ui/icons/Home';
import Logo from '../images/logo.png';


let style = {

  register: {
    background: '#32CD32',
    color: '#f7f3c2',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  }

};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  title: {
    flexGrow: 1,
    fontStyle: 'italic',
    color: '#000000',
    fontSize: '24px',
    textDecoration: 'none'
  },
  bar: {
    background: '#FFFFFF',
    // padding: '2px'
  },
  homeLink: {
    textDecoration: 'none',
    color: '#000000',
    marginRight: theme.spacing(3),
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0.25em'
    }
  },
  menuButton: {
    background: '#32CD32',
    color: '#FFFFFF',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.1)',
      color: '#FFFFFF',
    }
  },
  link: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      margin: '0.25em'
    }
  },
  image: {
    width: '40px',
    marginRight: '0.5em'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#000000',
    display: 'flex',
    transition: 'all .2s ease-in-out',
  },
  register: {
    background: '#32CD32',
    color: '#f7f3c2'
  },
}));

const Appbar = (props) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('FAN-JWT');
    localStorage.removeItem('FAN-user');
    window.location.reload();
  };

  return (
    <div className='root'>
      <AppBar position='static' className={classes.bar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title}>
            <Link className={classes.logoLink} to='/'>
              <img className={classes.image} src={Logo} alt='logo.jpg'/>
              <span> FreeAgentNow</span>
            </Link>
          </Typography>
          <Link className={(classes.link, classes.homeLink)} to='/'>
            <HomeIcon />
          </Link>
          {/* if user is true, render user's functionality */}
          {user ? (
            <Fragment>
              <Link to='/about' className={classes.link}>
                <Button className={classes.menuButton} variant='contained'>
                  About
                </Button>
              </Link>
              <Link to='/dashboard' className={classes.link}>
                <Button className={classes.menuButton} variant='contained'>
                  Dashboard
                </Button>
              </Link>
              <Link to='/user/profile' className={classes.link}>
                <Button className={classes.menuButton} variant='contained'>
                  FANFile
                </Button>
              </Link>
              <Link to='/' onClick={logout} className={classes.link}>
                <Button className={classes.menuButton} variant='contained'>
                  Log Out
                </Button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to='/about' className={classes.link}>
                <Button className={classes.menuButton} variant='contained'>
                  About
                </Button>
              </Link>
              <Link className={classes.link} to='/login'>
                <Button className={classes.menuButton} variant='contained'>
                  Login
                </Button>
              </Link>
              <Link className={classes.link} to='/register'>
                <Button className={classes.menuButton} style={style.register} variant='contained'>
                  Register
                </Button>
              </Link>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
