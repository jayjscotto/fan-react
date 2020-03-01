import React, { useContext } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from './Components/UserContext';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

const App = props => {
  const { setUser } = useContext(UserContext);

  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
