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
import useLoginForm from '../Hooks/Formhook';
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
  const login = () => {
    API.userLogin(inputs.email, inputs.password)
  }
  const { inputs, handleChange, handleSubmit } = useLoginForm(login);


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
                FreeAgentNow Login
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
                  <span style={style.register}aria-hidden='true' />
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
