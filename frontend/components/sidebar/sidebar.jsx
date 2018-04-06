import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <aside className="sidebar">
      <UserProfileContainer />

      <Link to="/lists/new">
        <button class="add-new-list-button">Add New List</button>
      </Link>

      <h2>Website Uder Construction...Please come back after 10 days. Thank you! </h2>
    </aside>
  );
};
