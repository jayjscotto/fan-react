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
  register: {
    //background: 'linear-gradient(to left, #00d2ff, #1fadef)',
    background: '#32CD32',
    color: '#FFFFFF',
    //borderRadius: '10px',
    marginLeft: '5px'
  },
  option: {
    marginTop: '1em'
  }
};

const Register = props => {
  const { message, setMessage } = useState('');
  const register = () => {
    const user = {
      email: inputs.email,
      userName: inputs.userName,
      password: inputs.password,
      password2: inputs.password2,
      code: inputs.code
    };
    API.userRegister(user).then(res => {
      if (res.status === 200) {
        props.history.push('/login');
      } else {
        setMessage(res.msg);
      }
    });
  };
  const { inputs, handleChange, handleSubmit } = useForm(register);

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
        <div 
          style={{ borderTop: '5px solid',
          borderRadius: '10px',
          borderImageSlice: '1',
          //borderImageSource: 'linear-gradient(to left, #00d2ff, #0f6bff)'
        }} />
          <CardContent>
            <form className='form-signin' onSubmit={handleSubmit}>
              {message !== '' && (
                <div
                  className='alert alert-warning alert-dismissible'
                  role='alert'
                >
                  {message}
                </div>
              )}
              <Typography style={style.action} variant='h5'>
                FreeAgentNow Register
              </Typography>
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
                label='Username'
                name='userName'
                value={inputs.userName}
                onChange={handleChange}
                autoComplete='current-username'
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
              <TextField
                style={style.input}
                id='outlined-password2-input'
                label='Confirm Password'
                name='password2'
                value={inputs.password2}
                onChange={handleChange}
                type='password'
                variant='outlined'
                required
              />
              <TextField
                style={style.input}
                id='outlined-code-input'
                label='Signup Code'
                name='code'
                value={inputs.code}
                onChange={handleChange}
                variant='outlined'
                required
              />
              <CardActions>
                <Button
                  variant='contained'
                  type='submit'
                  style={style.register}
                >
                  Register
                </Button>
              </CardActions>
              <Typography style={style.option}>
                Already a member? 
                <Link to='/login'>
                  <span style={style.register} aria-hidden='true' />
                   Login
                </Link>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
