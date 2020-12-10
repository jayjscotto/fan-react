import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { UserContext } from './UserContext';
import AppsIcon from '@material-ui/icons/Apps';
import Logo from '../images/F.svg';


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
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: 'auto',
    },
  },
  title: {
    flexGrow: 1,
    fontStyle: 'italic',
    color: '#000000',
    fontSize: '24px',
    textDecoration: 'none',
    marginTop: '0.25em'
  },
  bar: {
    background: '#FFF',
    borderBottom: '5px solid',
    borderImageSlice: '1',
    borderWidth: '5px',
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
    fontWeight: '500',
    //borderRadius: '20px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.04)',
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
    width: '30px',
    marginRight: '1em'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#000000',
    display: 'flex',
    transition: 'all .2s ease-in-out',
  },
  span: { 
    margin: 'auto 25px auto -25px'
  },
  register: {	
    background: '#32CD32',	
    color: '#f7f3c2',	
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.04)',
      color: '#FFFFFF',
    }
  },
  login: {
    color: '#f7f3c2',
    background: '#32CD32',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.04)',
      color: '#FFFFFF',
    }
  }	
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
              {/* <img className={classes.image} src={Logo} alt='logo.jpg'/> */}
              <span className={classes.span}>FreeAgentNow</span>
            </Link>
          </Typography>
          
          <Link className={(classes.link, classes.homeLink)} to='/'>
            <AppsIcon />
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
                <Button className={classes.login} variant='contained'>
                  Login
                </Button>
              </Link>
              <Link className={classes.link} to='/register'>
                <Button className={classes.register} variant='contained'>
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
