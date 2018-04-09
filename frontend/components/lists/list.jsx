import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);
    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className="list">
        <span>{list.name}</span>    
        <span className="list-delete"><FontAwesomeIcon icon='trash-alt'/></span>
        <span className="list-edit"><FontAwesomeIcon icon='edit'/></span>
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
