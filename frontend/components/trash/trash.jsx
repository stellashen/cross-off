import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import TaskIndexContainer from '../tasks/task_index_container';

export default class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.emptyTrash = this.emptyTrash.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(true);
  }

  emptyTrash(tasks) {
    if (tasks.todos) {
      this.handleDelete(tasks.todos);
    }
    if (tasks.completed) {
      this.handleDelete(tasks.completed);
    }
  }

  handleDelete(tasks) {
    Object.keys(tasks).forEach(id => this.props.deleteTask(id));
  }

  renderTodos(todos) {
    if (!todos) return null;
    return (
      <div className="todos trash-todos">
        <h4 className="todos-heading">Todos:</h4>
        <TaskIndexContainer tasks={todos} taskType='trash'/>
      </div>
    );
  }

  renderCompleted(completed) {
    if (!completed) return null;
    return (
      <div className="completed">
        <h4 className="completed-heading">Completed:</h4>
        <TaskIndexContainer tasks={completed} taskType='trash'/>
      </div>
    );
  }

  render() {
    const tasks = this.props.tasks;

    if (Object.keys(tasks).length === 0) return null;

    return (
      <div className="list-index-item">
        <h1 className="list-name">Trash</h1>
        <span className="trash-warning">
          <p>Click</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon='trash-alt'/>&nbsp;&nbsp;
          <p>on this page to permanently remove a task, or:</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => this.emptyTrash(tasks)}
                  className="signup button empty-trash">
            Delete Everything In My Trash
          </button>
        </span>
        {this.renderTodos(tasks.todos)}
        {this.renderCompleted(tasks.completed)}
      </div>
    );
  }
}
