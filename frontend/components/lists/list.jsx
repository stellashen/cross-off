import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  handleOpenModal(modalName, listId) {
    this.props.openModal(modalName, listId);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);
    const activeListId = this.props.activeListId;

    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className={activeListId === list.id ? "selected-list list" : "list"} id={list.id}>
        <Link to={`/lists/${list.id}`}>
          <span>
            {list.name.length <= 13? list.name : list.name.slice(0, 12).concat("...") }
          </span>
        </Link>

        <span className="list-delete"
              onClick={() => this.handleOpenModal('deleteList', list.id)}>
          <FontAwesomeIcon icon='trash-alt'/>
        </span>

        <span className="list-edit"
              onClick={() => this.handleOpenModal('editListForm', list.id)}>
          <FontAwesomeIcon icon='edit'/>
        </span>
      </li>
    ));
  }

  render() {
    return (
      <div className="lists-nav">
        <ul>
          {this.renderLists()}
        </ul>
      </div>
    );
  }
}
