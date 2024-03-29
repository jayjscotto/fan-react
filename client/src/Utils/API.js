import axios from 'axios';

export default {
  userToken: function() {
    return (axios.defaults.headers.common[
      'Authorization'
    ] = localStorage.getItem('FAN-JWT'));
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
  storeVideo: function(link) {
    let token = localStorage.getItem('FAN-JWT');
    if (link) {
      // const index = link.split('').findIndex(element => element === '=');
      // const linkString = link.substring(index + 1);
      const videoObject = {
        videoLink: link
      };
  
      return axios.post('/api/user/video', videoObject, {
        headers: { Authorization: token }
      });
    } else {
      return this.getVideos();
    }
  },
  // gets all videos for that user
  getVideo: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/video', {
      headers: { Authorization: token }
    });
  },
  getBlogPosts: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/blog', {
      headers: { Authorization: token }
    });
  },
  storeBlogPost: function(post) {
    let token = localStorage.getItem('FAN-JWT');
    console.log(post)
    return axios.post('/api/user/blogs', post, {
      headers: { Authorization: token }
    });
  },
  getNetworks: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/network', {
      headers: { Authorization: token }
    });
  },
  storeNetwork: function(link, socialType) {
    let token = localStorage.getItem('FAN-JWT');
    if (link) {
      const networkObject = {
        link: Object.values(link)[0],
        socialType: socialType
      };

      return axios.post('/api/user/networks', networkObject, {
        headers: { Authorization: token }
      });
    } else {
      return this.getNetworks();
    }
  },
  getResume: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get(`/api/user/resume`, {
      headers: { Authorization: token }
    });
  },
  storeResume: function(link) {
    let token = localStorage.getItem('FAN-JWT');
    if (link) {
      const resumeObject = {
        link
      };

      return axios.post('/api/user/resume', resumeObject, {
        headers: { Authorization: token }
      });
    }
  },
  getStats: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/stats', {
      headers: { Authorization: token }
    });
  },
  storeStats: function(stats) {
    let token = localStorage.getItem('FAN-JWT');
    if (stats.statObj) {
      return axios.post('/api/user/stats', stats.statObj, {
        headers: { Authorization: token }
      })
    }
  },
  getBio: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/bio', {
      headers: { Authorization: token }
    });
  },
  storeBio: function(bio) {
    let token = localStorage.getItem('FAN-JWT');
    return axios.post('/api/user/bio', bio, {
      headers: { Authorization: token }
    });
  },
  getVideos: function(){
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/videos', {
      headers: { Authorization: token }
    });
  },
  storeVideos: function(videos){
    let token = localStorage.getItem('FAN-JWT');
    //console.log(videos);
    return axios.post('/api/user/videos', videos, {
      headers: { Authorization: token }
    })
  },
  getColor: function() {
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/color', {
      headers: { Authorization: token }
    });
  },
  storeColor: function(color){
    let token = localStorage.getItem('FAN-JWT');
    return axios.post('/api/user/color', { color }, {
      headers: { Authorization: token }
    });
  },
  getName: function(){
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/name', {
      headers: { Authorization: token }
    });
  },
  storeName: function(name) {
    let token = localStorage.getItem('FAN-JWT');
    return axios.post('/api/user/name', name, {
      headers: { Authorization: token }
    });
  },
  getEmail: function(){
    let token = localStorage.getItem('FAN-JWT');
    return axios.get('/api/user/email', {
      headers: { Authorization: token }
    });
  },
  storeEmail: function(email) {
    let token = localStorage.getItem('FAN-JWT');
    return axios.post('/api/user/email', email, {
      headers: { Authorization: token }
    });
  }
};
