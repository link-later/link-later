import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './Context.js';
import Links from './Links';
import Auth from './HOCs/Auth';

function App() {
  const [checkUser, setCheckUser] = useState(false);
  const value = { checkUser, setCheckUser };
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
              <Redirect to='/auth' />
            );
          }}
        ></Route>
        <Route
          exact
          path='/auth'
          render={() => {
            return checkUser ? <Redirect to='/links' /> : <Auth />;
          }}
        ></Route>
        <Route exact path='/links'>
          <Links />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
