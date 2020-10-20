import { useState, useRef } from 'react';

const WithClicker = (initial = false) => {
  const [clicked, setClicked] = useState(initial);
  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);

  const handleClick = (e) => {
    // e.preventDefault();
    console.log('user', user.current.value);
    console.log('pass', pass.current.value);
  };

  return { clicked, handleClick, user, pass, email };
};
export default WithClicker;
