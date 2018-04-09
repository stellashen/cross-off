import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  handleDelete(listId) {
    this.props.deleteList(listId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lists !== this.props.lists) {
      this.props.fetchLists();
    }
  }

  handleOpenModal(modalName) {
    this.props.openModal(modalName);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);
    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className="list">
        <span>{list.name}</span>
        <span className="list-delete"
              onClick={() => this.handleDelete(list.id)}>
          <FontAwesomeIcon icon='trash-alt'/>
        </span>
        <span className="list-edit"
              onClick={() => this.handleOpenModal('editListForm')}>
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
