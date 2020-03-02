//login page
import React, { useState } from 'react';
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

let style = {
  box: {
    margin: 'auto'
  },
  input: {
    display: 'block',
    margin: '2em auto'
  },
  action: {
    color: '#5D675B'
  },
  login: {
    background: '#32CD32',
    color: '#f7f3c2'
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

  const userLogin = () => {
    API.userLogin({ userName: inputs.userName, password: inputs.password })
      .then(result => {
        console.log(result)
        API.populateLocalStorage(result.data);
        window.location.replace('/');
        setMessage('');
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
        <Card className='container' style={style.box}>
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
                name='userName'
                value={inputs.userName}
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
                  color='primary'
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
