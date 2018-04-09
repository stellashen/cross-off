import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import ListContainer from '../lists/list_container';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(modalName) {
    this.props.openModal(modalName);
  }

  render() {
    return (
      <aside className="sidebar">
        <UserProfileContainer />

        <button onClick={() => this.handleOpenModal('listForm')}
                className="add-new-list-button">
          <FontAwesomeIcon icon="plus" />
          <p>Add New List</p>
        </button>

        <ListContainer />
      </aside>
    );
  }
}
