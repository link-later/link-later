import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Context.js';
import Login from './Login';
import Signup from './Signup';
import WithClicker from './HOCs/WithClicker';
import Links from './Links';

function App() {
  const [checkUser, setCheckUser] = useState(false);
  const value = { checkUser, setCheckUser };
  console.log('check user', checkUser);
  return (
    <UserContext.Provider value={value}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return checkUser ? (
              <Redirect to='/links' />
            ) : (
              <Redirect to='/login' />
            );
          }}
        ></Route>
        <Route exact path='/login'>
          <Login />
          <Signup />
        </Route>
        <Login />
        <Signup />
        <Route exact path='/links'>
          <Links />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
