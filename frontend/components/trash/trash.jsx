import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
  }

  render() {
    return (
      <div className="list-index-item">
        <h1 className="list-name">Trash</h1>
        <br/>
        <div className="tasks">
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}
