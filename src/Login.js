import React from 'react';
import styled from 'styled-components';
import WithClicker from './HOCs/WithClicker';

const Div = styled.div`
  border-radius: 3px;
  border: 2px solid firebrick;
  padding: 12px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Login = (props) => {
  const { clicked, handleClick } = WithClicker();
  return (
    <Div>
      {props.children}
      <button onClick={handleClick}>Click</button>
      {clicked ? 'clicked' : 'unclicked'}
    </Div>
  );
};

export default Login;
