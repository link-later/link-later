import React, { useContext } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import UserContext from './Context.js';
import Login from './Login';
import Signup from './Signup';

function App() {
  const context = useContext(UserContext);

  return (
    <div className='App'>
      Hi {context}, Welcome to Link Later
      <Login />
      <Signup />
    </div>
  );
}

export default App;
