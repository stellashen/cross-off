import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-profile">
      <p className="email">{currentUser.email}</p>
      <button className="signout button" onClick={logout}>Log Out</button>
    </div>
  );
};
