import React, { useContext } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import UserContext from './Context.js';
import styled from 'styled-components';
import Login from './Login';

const Form = styled.form`
  flex: 1;
  padding: 8px;
`;
const Input = styled.input`
  margin: 4px;
`;
function App() {
  const context = useContext(UserContext);

  return (
    <div className='App'>
      Hi {context}, Welcome to Link Later
      <Login>
        Login!
        <Form>
          Username
          <Input text='Username'></Input>
        </Form>
        <Form>
          Password
          <Input text='Password'></Input>
        </Form>
      </Login>
      <Login>
        Sign up!
        <Form>
          Email
          <Input text='Email'></Input>
        </Form>
        <Form>
          Username
          <Input text='Username'></Input>
        </Form>
        <Form>
          Password
          <Input text='Password'></Input>
        </Form>
      </Login>
    </div>
  );
}

export default App;
