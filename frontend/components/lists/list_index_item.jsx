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
    this.props.fetchTasks();
    this.props.fetchList(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.setState((state) => ({
        ["id"]: nextProps.match.params.listId
      }));
    }
    else if (nextProps.tasks !== this.props.tasks) {
      //
    }
  }

  renderTasks(tasksIds) {
    if (!tasksIds) return null;
    const taskIdsArray = tasksIds.map(idHash => idHash["id"]);
    const tasks = taskIdsArray.map(taskId => this.props.tasks[taskId]);

    if (!tasks) return null;

    return tasks.map((task, idx) => (
      <li key={`${task.id}${task.title}`} className="task">
        <span>{task.title}</span>
        <span className="list-delete">
          <FontAwesomeIcon icon='trash-alt'/>
        </span>
      </li>
    ));
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
