import { useState } from 'react';

const WithClicker = (initial = false) => {
  const [clicked, setClicked] = useState(initial);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return { clicked, handleClick };
};
export default WithClicker;
