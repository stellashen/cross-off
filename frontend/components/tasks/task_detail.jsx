import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description:'',
      due_date:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.taskId;
    if (this.props.match.params.taskId !== id) {
      this.props.clearErrors();
      this.setState({
        title:'',
        description:'',
        due_date:'',
      });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedTask = Object.assign({}, this.state);
    this.props.editTask(updatedTask);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const id = this.props.match.params.taskId;
    if (this.props.tasks === undefined) return null;
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

    if (this.state.title.length === 0) {
      this.setState(task);
    }

    return (
      <div className="task-detail">
        <div className="antiscroll">
          <form onSubmit={this.handleSubmit} className="task-detail-form">
            <div className="task-form-header">
              <button className="list-save button task-detail-save" type="submit">
                Save Change
              </button>
            </div>
            <div className="task-form-body">
              <div className="errors">{this.renderErrors()}</div>
              <br/>
              <span className="strong">Title</span>
              <textarea
                cols="30" rows="3"
                value={this.state.title}
                onChange={this.update('title')}
                className="task-form-input task-detail-title-input"
                placeholder="Title"
              />
              <br/>
              <span className="strong">Due Date (optional)</span>
              <input
                type="date"
                value={this.state.due_date}
                onChange={this.update('due_date')}
                className="task-form-input"
              />
              <span className="strong">Description (optional)</span>
              <textarea
                cols="30" rows="10"
                value={this.state.description}
                onChange={this.update('description')}
                className="task-form-input"
                placeholder="Description" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
