import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import NewTaskBarContainer from '../tasks/new_task_bar_container';
export default class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.props.fetchList(nextProps.match.params.listId);
    }
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
    const { list } = this.props;
    if (!list) return null;
    return (
      <div className="list-index-item">
        <h1>{list.name}</h1>
        <br/>

        <NewTaskBarContainer />

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
