import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modal
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(modalName) {
    this.props.openModal(modalName);
  }

  render() {
    return (
      <aside className="sidebar">
        <UserProfileContainer />

        <Link to="/lists/new">
          <button onClick={this.handleOpenModal('listForm')}
                  className="add-new-list-button">
            <FontAwesomeIcon icon="plus" />
            <p>Add New List</p>
          </button>
        </Link>
      </aside>
    );
  }
}
