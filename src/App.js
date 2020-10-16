import React, { useContext } from 'react';
import './App.css';
// import { Switch, Route, Link } from 'react-router-dom';
import UserContext from './Context.js';
import Login from './Login.js';

function App() {
  return (
    <UserContext.Consumer>
      <div className='App'>
        Hi {context}, Welcome to Link Later
        <Login />
      </div>
    </UserContext.Consumer>
  );
}

export default App;
