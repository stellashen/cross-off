import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.emptyTask;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.taskId;
    this.props.requestSingleTask(id);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.taskId;
    if (this.props.match.params.taskId !== id) {
      this.props.clearErrors();
      this.props.requestSingleTask(id);
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

  updateState(task) {
    return e => this.setState(task);
    debugger;
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
    const task = this.props.currentTask;
    if (Object.keys(task).length === 0) {
      return null;
    } else {
      this.updateState(task);
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
              <textarea
                cols="30" rows="3"
                value={this.state.title}
                onChange={this.update('title')}
                className="task-form-input task-detail-title-input"
                placeholder="Title"
              />
              <br/>
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
