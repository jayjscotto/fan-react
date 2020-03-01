import axios from 'axios';

export default {
  userLogin: (email, password) => {
    console.log(email, password)
    return axios.post('/login', {
      email,
      password
    });
  }
};
