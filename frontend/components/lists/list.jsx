import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleShowList = this.handleShowList.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  handleOpenModal(modalName, listId) {
    this.props.openModal(modalName, listId);
  }

  // handleShowList(listId) {
  //
  // }

  renderLists() {
    const lists = Object.values(this.props.lists);
    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className="list">

          <span>{list.name}</span>


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
