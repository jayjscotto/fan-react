import React, { useContext, useEffect } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from './Components/UserContext';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
import Videos from './Pages/Videos';
import Home from './Pages/Home';
import API from './Utils/API';

const App = props => {
  const { setUser } = useContext(UserContext);

  useEffect(
    () => {
      const userObj = JSON.parse(API.getLocalStorage('FAN-user'));
      if (userObj) {
        setUser(userObj);
        console.log(userObj)
      } else {
        props.history.push('/login');
      }
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/user/videos' component={Videos} />
        <Route exact path='/user/blog' component={Blog} />
        {/* <Route exact path='/user/resume' component={Resume} />
        <Route exact path='/user/network' component={Network} /> */}
      </Switch>
    </div>
  );
};

export default withRouter(App);
