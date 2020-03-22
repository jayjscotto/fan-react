import axios from 'axios';

export default {
	userToken: function() {
		return (axios.defaults.headers.common['Authorization'] = localStorage.getItem('FAN-JWT'));
	},
	// sign up user
	userRegister: function(obj) {
		return axios.post('/register', obj, function(res) {
			// changed the data being sent in request
			if (res.status === 200) {
				console.log('success');
			}
		});
	},
	// log in user
	userLogin: function(obj) {
		return axios.post('/login', obj);
	},
	// log out user
	userLogout: function(obj) {
		localStorage.removeItem('FAN-JWT');
		localStorage.removeItem('FAN-user');
	},
	// populating local storage
	populateLocalStorage: function(userData) {
		localStorage.setItem('FAN-JWT', userData.token);
		localStorage.setItem('FAN-user', JSON.stringify(userData.user));
	},
	// gets item from Local Storage
	getLocalStorage: function(key) {
		return localStorage.getItem(key);
	},
	// gets the link string for youtube
	// sends the link, and the number of the video being edited (1-4) to the server
	storeVideo: function(link, number) { 
		let token = localStorage.getItem('FAN-JWT');
		if(link) {
			const index = link.split('').findIndex(element => element === '=')
			console.log(`link index begins at: ${index}`)
			const linkString = link.substring(index)
	
			const videoObject = {
				videoLink: linkString,
				videoNumber: number
			}
			
			return axios.post('/user/videos', videoObject, {
				headers: { Authorization: token }
			});
		} else {
			return this.getVideos();
		}

	},
	// gets all videos for that user
	getVideos: function() {
		let token = localStorage.getItem('FAN-JWT');
		return axios.get('/user/videos', {
			headers: { Authorization: token }
		});
	},
	getBlogPosts: function() {
		console.log('getting blogs')
		let token = localStorage.getItem('FAN-JWT');
		return axios.get('/user/blog', {
			headers: { Authorization: token }
		});
	},
	storeBlogPost: function(post) {
		console.log(post)
		let token = localStorage.getItem('FAN-JWT');
		return axios.post('/user/blogs', post, {
			headers: { Authorization: token }
		});
	},
	getNetworks: function() {
		let token = localStorage.getItem('FAN-JWT');
		return axios.get('/user/network', {
			headers: { Authorization: token }
		});
	},
	storeNetwork: function(link, socialType) {
		let token = localStorage.getItem('FAN-JWT');
		if (link) {
			const networkObject = {
				link,
				socialType
			}
	
			return axios.post('/user/network', networkObject, {
				headers: { Authorization: token }
			});
		} else {
			return this.getNetworks();
		}
	},
	getResume: function() {
		let token = localStorage.getItem('FAN-JWT');
		return axios.get('/user/resume', {
			headers: { Authorization: token }
		});
	}
}

