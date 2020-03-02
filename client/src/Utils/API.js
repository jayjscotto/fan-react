import axios from 'axios';

export default {
	userToken: function() {
		return (axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken'));
	},
	userRegister: function(obj) {
		return axios.post('/register', obj, function(res) {
			// changed the data being sent in request
			if (res.status === 200) {
				console.log('success');
			}
		});
	},
	userLogin: function(obj) {
		return axios.post('/login', obj);
	},
	userLogout: function(obj) {
		localStorage.removeItem('FAN-JWT');
		localStorage.removeItem('FAN-user');
	},
	populateLocalStorage: function(userData) {
		localStorage.setItem('FAN-JWT', userData.token);
		localStorage.setItem('FAN-user', JSON.stringify(userData.user));
	},
	getLocalStorage: function(key) {
		return localStorage.getItem(key);
  }
}