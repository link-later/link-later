import React, { useContext } from 'react';
import UserContext from './Context.js';

const Login = () => {
  const context = useContext(UserContext);
  return <div>Login</div>;
};

export default Login;
