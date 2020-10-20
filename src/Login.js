import React from 'react';
import WithClicker from './HOCs/WithClicker';
import { Div, Form, Input } from './style';

const Login = (props) => {
  const { clicked, handleClick, user, pass } = WithClicker();
  return (
    <Div>
      <Form>
        Username
        <Input ref={user}></Input>
        Password
        <Input ref={pass}></Input>
        <button onClick={handleClick}>Click</button>
      </Form>
      {clicked ? 'clicked' : 'unclicked'}
    </Div>
  );
};

export default Login;
