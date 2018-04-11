import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import NewTaskBarContainer from '../tasks/new_task_bar_container';

export default class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
  }

  componentDidMount() {
    this.props.fetchTasks(false);
    this.props.fetchList(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.setState((state) => ({
        ["id"]: nextProps.match.params.listId
      }));
    }
  }

  handleCheckBox(task) {
    return e => {
      if (e.target.checked) {
        task.completed = true;
        e.target.setAttribute('checked', true);
        e.target.parentNode.style.textDecoration = "line-through";
      } else {
        task.completed = false;
        e.target.removeAttribute('checked');
        e.target.parentNode.style.textDecoration = "";
      }
    };
  }

  handleTrash(task) {
    return e => {
      task.trash = true;
      this.props.editTask(task);
    };
  }

  renderTasks(tasksIds) {
    if (!tasksIds) return null;
    const tasks = tasksIds.map(taskId => this.props.tasks[taskId]);
    if (Object.keys(tasks).length === 0) return null;

    return tasks.map((task, idx) => {
      if (!task || task.completed === true) {
        return null;
      }
      return (
        <li key={`${task.id}${task.title}`} className="task">
          <input id={`taskCheckBox${task.id}`} type="checkbox"
                 onChange={this.handleCheckBox(task)} />&nbsp;&nbsp;
               <label htmlFor={`taskCheckBox${task.id}`}>
            <span>{task.title}</span>
          </label>

          <span className="list-delete" onClick={this.handleTrash(task)}>
            <FontAwesomeIcon icon='trash-alt'/>
          </span>
        </li>
      );
    });
  }

  render() {
    const { list } = this.props;
    if (!list) return null;

    return (
      <div className="list-index-item">
        <h1 className="list-name">{list.name}</h1>
        <br/>

        <NewTaskBarContainer />

        <div className="tasks">
          <ul>
            {this.renderTasks(list.tasksIds)}
          </ul>
        </div>
      </div>
    );
  }
}
