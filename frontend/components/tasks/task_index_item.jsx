import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCheckBox(task) {
    return e => {
      if (e.target.checked) {
        task.completed = true;
        e.target.setAttribute('checked', true);
        e.target.parentNode.style.textDecoration = "line-through";
        this.props.editTask(task);
      } else {
        task.completed = false;
        e.target.setAttribute('checked', false);
        e.target.parentNode.style.textDecoration = "";
        this.props.editTask(task);
      }
    };
  }

  handleTrash(task) {
    return e => {
      if (this.props.taskType === 'trash') {
        this.props.deleteTask(task.id);
      } else {
        task.trash = true;
        this.props.editTask(task);
      }
    };
  }

  render() {
    const task = this.props.task;
    if (!task) return null;

    return (
      <div style={this.props.divStyle}>
        <input
          checked={this.props.task.completed? true : false}
          id={`taskCheckBox${task.id}`}
          type="checkbox"
          onChange={this.handleCheckBox(task)} />&nbsp;&nbsp;
             <label htmlFor={`taskCheckBox${task.id}`}>
          <span>{task.title}</span>
        </label>

        <span className="list-delete" onClick={this.handleTrash(task)}>
          <FontAwesomeIcon icon='trash-alt'/>
        </span>
      </div>
    );
  }
}
