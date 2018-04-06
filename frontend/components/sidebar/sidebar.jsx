import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <aside className="user-profile">
      <UserProfileContainer />

      <Link to="/lists/new">
        <button class="add-new-list-button">Add New List</button>
      </Link>
    </aside>
  );
};
