import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTask(this.props.match.params.taskId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.taskId !== nextProps.match.params.taskId) {
      this.props.fetchTask(nextProps.match.params.taskId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedTask = Object.assign({}, this.state);
    this.props.editTask(updatedTask);
  }

  render() {
    const task = this.props.task;
    if (!task) return null;

    return (
      <div className="task-detail">
        {task.title}
      </div>
    );
  }
}
