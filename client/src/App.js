import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      {/* Nav */}
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/dashboard" component={Dashboard}/>        */}
      </Switch>
      </div>
      
      {/* Footer */}
    </Router>
  );
}

export default App;
