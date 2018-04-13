import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.taskId;
    if (this.props.match.params.taskId !== id) {
      const tasksHash = nextProps.tasks.todos || nextProps.tasks.completed;
      const currentTask = tasksHash[id];
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedTask = Object.assign({}, this.state);
    this.props.editTask(updatedTask);
  }

  render() {
    const id = this.props.match.params.taskId;
    const todosHash = this.props.tasks.todos;
    const completedHash = this.props.tasks.completed;
    let tasksHash = {};
    if (todosHash && todosHash[id]) {
      tasksHash = todosHash;
    } else if (completedHash && completedHash[id]) {
      tasksHash = completedHash;
    }
    if (tasksHash === {} || !tasksHash) return null;
    const task = tasksHash[id];
    if (task === {} || !task) return null;

    return (
      <div className="task-detail">
        {task.title}
      </div>
    );
  }
}
