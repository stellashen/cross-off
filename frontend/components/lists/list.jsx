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
    // const id = this.props.listId;
    // console.log(id);
    // if (id) {
    //   this.highlightSelectedList(id);
    // }
  }

  highlightSelectedList(listId) {
    const selectedList = document.getElementById(listId);
    const lastSelectedList = document.getElementsByClassName("selected-list");
    if (lastSelectedList.length > 0) {
      lastSelectedList[0].classList.remove("selected-list");
    }
    selectedList.classList.add("selected-list");
  }

  handleOpenModal(modalName, listId) {
    this.props.openModal(modalName, listId);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);
    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className="list" id={list.id}>
        <Link to={`/lists/${list.id}`}>
          <span onClick={() => this.highlightSelectedList(list.id)}>
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
