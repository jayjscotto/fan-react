import axios from 'axios';

export default {
  userLogin: credentials => {
    const user = {
      username: credentials.username,
      password: credentials.password
    }
    console.log(user)
    return axios.post('/login', user);
  },
  userRegister: user => {
    console.log(user);
    return axios.post('/register', { user });
  }
};
