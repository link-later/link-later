import React, { useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../Context';

const WithClicker = (initial = false) => {
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

  return { checkUser, handleClick, user, pass, email };
};
export default WithClicker;
