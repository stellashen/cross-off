import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';

export default ({ currentUser, logout }) => {
  return (
    <aside className="user-profile">
      <UserProfileContainer />
    </aside>
  );
};
