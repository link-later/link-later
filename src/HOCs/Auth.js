import React, { useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../Context';
import Login from '../Login';
import Signup from '../Signup';
import database from '../database';

const Auth = () => {
  const {
    checkUser,
    setCheckUser,
    userId,
    setUserId,
    data,
    setData,
  } = useContext(UserContext);
  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('user', user.current.value);
    console.log('pass', pass.current.value);
    setUserId(Math.floor(Math.random() * Math.floor(5))); // this is the substitute for getting user id back from server
    setCheckUser(true);
    setData(database[Math.floor(Math.random() * Math.floor(5))]); //substitute for getting links back based on userId
  };

  return (
    <>
      <Login user={user} pass={pass} handleClick={handleClick} />
      <Signup user={user} pass={pass} email={email} handleClick={handleClick} />
    </>
  );
};
export default Auth;
