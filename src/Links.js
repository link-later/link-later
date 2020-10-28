import React, { useContext } from 'react';
import UserContext from './Context';
import data from './database';
import Link from './Link';

const Links = () => {
  const { data } = useContext(UserContext);
  const links = [];
  for (let i = 0; i < data.length; i++) {
    links.push(<Link url={data[i]} />);
  }
  return <div>{links}</div>;
};

export default Links;
