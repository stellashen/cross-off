import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
      saved:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const listId = this.props.match.params.listId;
    const taskId = this.props.match.params.taskId;
    if (listId !== "trash") {
      this.props.fetchList(listId);
    }
    if (taskId) {
      this.props.requestSingleTask(taskId);
    }
    const task = this.getCurrentTask();
    if (task && this.state.title.length === 0) {
      this.setState(task);
    }
  }

  componentWillReceiveProps(nextProps) {
    const taskId = nextProps.match.params.taskId;
    if (this.props.match.params.taskId !== taskId) {
      this.props.clearErrors();
      this.props.requestSingleTask(taskId);
      this.setState({
        title:'',
        description:'',
        due_date:'',
        saved:''
      });
    }
    const task = this.getCurrentTask();
    if (task && this.state.title.length === 0) {
      this.setState(task);
    }
    if (task && this.state.title.length !== 0 && task.completed !== this.state.completed) {
      this.setState(task);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.closeTask();
  }

  renderErrors() {
    if (this.props.errors.taskdetail === undefined) {
      return;
    }
    return(
      <ul>
        {this.props.errors.taskdetail.map((error, i) => (
          <li key={`taskdetailformerror-${error.id}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedTask = Object.assign({}, this.state);
    this.props.editTask(updatedTask);
    this.changeSavedMessage("Changes Saved");
    setTimeout(()=>this.changeSavedMessage(""), 2000);
  }

  changeSavedMessage(message) {
    this.setState({["saved"]: message})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getCurrentTask() {
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
    return task;
  }

  render() {
    const listId = this.props.match.params.listId;
    const task = this.getCurrentTask();
    if (!task) {
      if (listId === undefined) {
        return <Redirect to="/lists/trash" />;
      }
      return <Redirect to={`/lists/${listId}`} />;
    }
    return (
      <div className="task-detail">
        <div className="antiscroll task-detail-wrapper">
          <form onSubmit={this.handleSubmit} className="task-detail-form">
            <div className="task-form-header">
              <button className="list-save button task-detail-save" type="submit">
                Save Changes
              </button>
              <p className="task-detail-save-reminder">{this.state.saved}</p>
            </div>
            <div className="task-form-body">
              <div className="errors">{this.renderErrors()}</div>
              <br/>
              <span><strong>Title</strong></span>
              <textarea
                cols="30" rows="3"
                value={this.state.title}
                onChange={this.update('title')}
                className="task-form-input task-detail-title-input input-width"
                placeholder="Title"
              />
              <br/>
              <span><strong>Due Date (optional)</strong></span>
              <input
                type="date"
                value={this.state.due_date? this.state.due_date.slice(0,10) : ''}
                onChange={this.update('due_date')}
                className="task-form-input"
              />
              <span><strong>Description (optional)</strong></span>
              <textarea
                cols="30" rows="10"
                value={this.state.description}
                onChange={this.update('description')}
                className="task-form-input input-width"
                placeholder="Description" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
