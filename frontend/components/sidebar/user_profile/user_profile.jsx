import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-profile">
      <h2 className="username">{currentUser.username}</h2>
      <button className="signout button" onClick={logout}>Log Out</button>
    </div>
  );
};
