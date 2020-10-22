import React, { useContext, useRef } from 'react';
import WithClicker from './HOCs/Auth';
import { Div, Form, Input } from './style';
import UserContext from './Context.js';

const Login = (props) => {
  const { checkUser, setCheckUser } = useContext(UserContext);
  return (
    <Div>
      <Form>
        Username
        <Input ref={props.user}></Input>
        Password
        <Input ref={props.pass}></Input>
        <button onClick={props.handleClick}>Click</button>
      </Form>
      {checkUser ? 'clicked' : 'unclicked'}
    </Div>
  );
};

export default Login;
