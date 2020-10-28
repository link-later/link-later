import React from 'react';
const UserContext = React.createContext({
  checkUser: false,
  setCheckUser: () => {},
  userId: null,
  setUserId: () => {},
  data: [],
  setData: () => {},
});
export default UserContext;
