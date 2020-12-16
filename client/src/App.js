import React, { useContext, useEffect } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from './Components/UserContext';
import Login from './Pages/Login';
import About from './Pages/About';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
import Videos from './Pages/Videos';
import Resume from './Pages/Resume';
import Network from './Pages/Network';
import Home from './Pages/Home';
import Quadrant from './Pages/Quadrant'
import API from './Utils/API';
import logo from './images/logo.jpg';
import logo2 from './images/F.svg';
import Newuser from './Pages/Newuser'

const App = props => {
  const { setUser } = useContext(UserContext);

  useEffect(
    () => {
      const userObj = JSON.parse(API.getLocalStorage('FAN-user'));
      if (userObj) {
        setUser(userObj);
      } else {
        props.history.push('/');
      }
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className='container' style={
      { 
      backgroundImage: `url(${logo2})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll' }}>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)',}}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/newuser' component={Newuser} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/user/videos' component={Videos} />
        <Route exact path='/user/blog' component={Blog} />
        <Route exact path='/user/resume' component={Resume} />
        <Route exact path='/user/network' component={Network} />
        <Route exact path='/user/profile' component={Quadrant} />
        {/* 
          <Route exact path='/user/resume' component={Resume} />
        */}
      </Switch>
    </div>
    </div>
  );
};

export default withRouter(App);
