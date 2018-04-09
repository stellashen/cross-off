import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLists() {
    const lists = Object.values(this.props.lists);

    return lists.map((list, idx) => (
      <li key={`${idx}${list.name}`} className="list-nav">list.name</li>
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
