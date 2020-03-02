//login page
import React from 'react';
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

const Register = props => {
  const register = () => {
    const user = {
      email: inputs.email,
      userName: inputs.userName,
      password: inputs.password,
      password2: inputs.password2,
      code: inputs.code
    };
    API.userRegister(user).then(res => console.log(inputs));
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
          <CardContent>
            <form className='form-signin' onSubmit={handleSubmit}>
              {/* {message !== '' && (
                <div className="alert alert-warning alert-dismissible" role="alert">
                  {message}
                </div>
              )} */}
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
                  color='primary'
                  type='submit'
                  style={style.login}
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
