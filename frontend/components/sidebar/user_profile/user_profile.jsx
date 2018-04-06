import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-profile">
      <h2 className="email">{currentUser.email}</h2>
      <button className="signout button" onClick={logout}>Log Out</button>
    </div>
  );
};
