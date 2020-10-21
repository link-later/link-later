import React, { useContext } from 'react';
import WithClicker from './HOCs/WithClicker';
import { Div, Form, Input } from './style';
import UserContext from './Context.js';

const Login = (props) => {
  const context = useContext(UserContext);
  const { checkUser, handleClick, user, pass } = WithClicker();
  return (
    <Div>
      <Form>
        Username
        <Input ref={user}></Input>
        Password
        <Input ref={pass}></Input>
        <button onClick={handleClick}>Click</button>
      </Form>
      {checkUser ? 'clicked' : 'unclicked'}
    </Div>
  );
};

export default Login;
