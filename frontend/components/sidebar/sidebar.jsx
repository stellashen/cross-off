import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default ({openModal}) => {
  return (
    <aside className="sidebar">
      <UserProfileContainer />

      <Link to="/lists/new">
        <button onClick={() => openModal('listForm')}
                className="add-new-list-button">
          <FontAwesomeIcon icon="plus" />
          <p>Add New List</p>
        </button>
      </Link>
    </aside>
  );
};
