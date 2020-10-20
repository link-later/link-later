import React from 'react';
import WithClicker from './HOCs/WithClicker';
import { Div, Form, Input } from './style';

const Signup = (props) => {
  const { clicked, handleClick, user, pass, email } = WithClicker();
  return (
    <Div>
      Sign up!
      <Form>
        Email
        <Input ref={email}></Input>
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

export default Signup;
