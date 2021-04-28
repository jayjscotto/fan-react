import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import { UserContextProvider } from './Components/UserContext';

ReactDOM.render(
  <Router>
    <UserContextProvider>
        {/* <Appbar /> */}
      <div style={{backgroundColor: 'rgb(0,0,0)',height:'100vh'}}>
        <App />
      </div>
    </UserContextProvider>
  </Router>,
  document.getElementById('root')
);