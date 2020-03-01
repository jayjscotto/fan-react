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
        <Appbar />
        <App />
    </UserContextProvider>
  </Router>,
  document.getElementById('root')
);