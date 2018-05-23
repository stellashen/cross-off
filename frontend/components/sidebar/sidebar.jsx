import React from 'react';
import UserProfileContainer from './user_profile/user_profile_container';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import ListContainer from '../lists/list_container';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(modalName) {
    const listId = this.props.activeListId;
    if (listId){
      this.props.history.push(`/lists/${listId}`);
    } else {
      this.props.history.push("/lists");
    }
    this.props.openModal(modalName);
  }

  render() {
    const activeListId = this.props.activeListId;
    return (
      <aside className="sidebar">
        <UserProfileContainer />

        <button onClick={() => this.handleOpenModal('addListForm')}
                className="add-new-list-button">
          <FontAwesomeIcon icon="plus" />
          <p>Add New List</p>
        </button>

        <ListContainer />

        <Link to="/lists/trash">
            <span className={activeListId === "trash" ? "selected-list add-new-list-button trash-nav" : "add-new-list-button trash-nav"}>
              <FontAwesomeIcon icon="trash-alt" />
              <p>Trash</p>
            </span>
        </Link>

      </aside>
    );
  }
}
