import React, { useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../Context';
import Login from '../Login';
import Signup from '../Signup';

const Auth = () => {
  const { checkUser, setCheckUser } = useContext(UserContext);
  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('user', user.current.value);
    console.log('pass', pass.current.value);
    setCheckUser(true);
  };

  return (
    <>
      <Login user={user} pass={pass} handleClick={handleClick} />
      <Signup user={user} pass={pass} email={email} handleClick={handleClick} />
    </>
  );
};
export default Auth;
