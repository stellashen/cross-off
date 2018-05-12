import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.state = {
      selectedList: ''
    }
  }

  componentDidMount() {
    this.props.fetchLists();
    const id = this.props.match.params.listId;
    this.setState(["selectedList"]: id);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.listId;
    if (id !== this.props.match.params.listId) {
      this.setState(["selectedList"]: id);
    }
  }

  handleOpenModal(modalName, listId) {
    this.props.openModal(modalName, listId);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);
    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className={list.id === this.props.match.params.listId? "list selected-list" : "list"}>
        <Link to={`/lists/${list.id}`}>
          <span>{list.name.length <= 13? list.name : list.name.slice(0, 12).concat("...") }</span>
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
