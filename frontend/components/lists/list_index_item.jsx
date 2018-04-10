import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.props.fetchTasks(nextProps.match.params.listId);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formTask = Object.assign({}, this.state);
    this.props.processForm(formTask);
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

  renderTasks() {
    const { list } = this.props;
    if (!list) return null;
    const tasks = list.tasks;
    if (!tasks) return null;
    return list.tasks.map((task, idx) => (
      <li key={`${task.id}${task.title}`} className="task">
        <span>{task.title}</span>
        <span className="list-delete">
          <FontAwesomeIcon icon='trash-alt'/>
        </span>
      </li>
    ));
  }

  render() {
    const { list, errors } = this.props;
    if (!list) return null;
    return (
      <div className="list-index-item">
        <h1>{list.name}</h1>
        
        <div className="list-form-container new-task-bar-container">
          <form onSubmit={this.handleSubmit} className="list-form-box new-task-bar">
            <div className="list-form-body">
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="list-form-input"
                placeholder="Add Task: press Enter to save"
              />
              <div className="errors">{this.renderErrors()}</div>
            </div>
          </form>
        </div>

        <br/>
        <div className="tasks">
          <ul>
            {this.renderTasks()}
          </ul>
        </div>
      </div>
    );
  }
}
