import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newtagname: '',
      title:'',
      description:'',
      due_date:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.taskId;
    if (this.props.match.params.taskId !== id) {
      this.props.clearErrors();
      this.setState({
        newtagname: '',
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
    delete updatedTask["newtagname"];
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
          <li key={`taskdetailerror-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleKeyPress(e) {
    if(e.key === 'Enter'){
      const tagname = this.state.newtagname;
      const tags = this.props.fetchTags();
      let existingTagId = -1;
      if (!tags || Object.keys(tags).length !== 0) {
        existingTagId = this.isTagNew(tags, tagname);
      }

      const newTagging = {
        task_id: this.props.taskId,
        tag_id: null,
      };

      if (existingTagId === -1) {
        const newtag = Object.assign({}, {name: tagname});
        const tag = this.props.addNewTag(newtag);
        newTagging.tag_id = tag.id;
      } else {
        newTagging.tag_id = existingTagId;
      }

      this.props.addTagging(newTagging);
    }
  }

  findTag(tags, tagname) {
    Object.keys(tags).forEach(tagId => {
      if (tags[tagId]["name"] === tagname) {
        return tagId;
      }
    });
    return -1;
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
              <button
                className="list-save button task-detail-save"
                type="submit">
                Save Change
              </button>

              <label className="add-new-tag">Add tag (optional):
                <input
                  type="text"
                  value={this.state.newtagname}
                  onChange={this.update('newtagname')}
                  className="task-form-input"
                  placeholder="Add tag..."
                  onKeyPress={this.handleKeyPress}
                />
              </label>
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
