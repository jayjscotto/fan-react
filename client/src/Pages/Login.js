//login page
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Grid,
  CardActions,
  TextField,
  Typography
} from '@material-ui/core';
import useForm from '../Hooks/Formhook';
import API from '../Utils/API';
import Welcomeback from './Welcomeback';
import { UserContext } from '../Components/UserContext';

let style = {
  box: {
    margin: 'auto',
  },
  input: {
    display: 'block',
    margin: '2em auto'
  },
  action: {
    color: '#5D675B'
  },
  login: {
    //background: 'linear-gradient(to left, #00d2ff, #1fadef)',
    background: '#32CD32',
    color: '#FFFFFF',
  },
  register: {
    marginLeft: '1em'
  },
  option: {
    marginTop: '1em'
  }
};

const Login = props => {
  const [message, setMessage] = useState('');
  const [welcome, setWelcome] = useState(false);
  const { user } = useContext(UserContext);

  const userLogin = () => {
    API.userLogin({ email: inputs.email, password: inputs.password })
      .then(result => {
        console.log(result)
        setMessage('');
        setWelcome(welcome => !welcome);
        API.populateLocalStorage(result.data);
        setTimeout(() => {
          return window.location.replace('/user/profile')
        }, 1500)
        
        
      })
      .catch(error => {
        if (error.response.status === 401) {
          setMessage('Login failed. Username or Password incorrect.');
        }
      });
  };

  const { inputs, handleChange, handleSubmit } = useForm(userLogin);

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
      elevation={3}
    >
      <Grid item>
        {welcome ? (<Welcomeback/>) : (<Card className='container' style={style.box}>
          <div 
          style={{ borderTop: '5px solid',
          borderRadius: '10px',
          borderImageSlice: '1',
          //borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'
          }} />
          <CardContent>
            <Typography style={style.action} variant='h5'>
              FreeAgentNow Login
            </Typography>

            <form className='form-signin' onSubmit={handleSubmit}>
              {message !== '' && (
                <div
                  className='alert alert-warning alert-dismissible'
                  role='alert'
                >
                  {message}
                </div>
              )}

              <TextField
                style={style.input}
                label='Email Address'
                name='email'
                value={inputs.email}
                onChange={handleChange}
                autoComplete='current-email'
                variant='outlined'
                required
              />
              <TextField
                style={style.input}
                id='outlined-password-input'
                label='Password'
                name='password'
                value={inputs.password}
                onChange={handleChange}
                type='password'
                autoComplete='current-password'
                variant='outlined'
                required
              />
              <CardActions>
                <Button
                  variant='contained'
                  type='submit'
                  style={style.login}
                >
                  Login
                </Button>
              </CardActions>
              <Typography style={style.option}>
                Not a member?
                <Link to='/register'>
                  <span style={style.register} aria-hidden='true' />
                  Register
                </Link>
              </Typography>
            </form>
          </CardContent>
        </Card>)}
        
      </Grid>
    </Grid>
  );
};

export default Login;
