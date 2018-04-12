import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import TaskIndexContainer from '../tasks/task_index_container';

export default class Trash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks(true);
  }

  render() {
    const tasks = this.props.tasks;

    if (!tasks) return null;

    return (
      <div className="list-index-item">
        <h1 className="list-name">Trash</h1>
        <TaskIndexContainer tasks={tasks} taskType='trash' />
      </div>
    );
  }
}
