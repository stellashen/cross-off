import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItemContainer from '../tasks/task_index_item_container';

export default class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  // 
  // componentDidMount() {
  //   debugger;
  //   this.props.fetchList(this.props.match.params.listId);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   if (this.props.match.params.listId !== nextProps.match.params.listId) {
  //     this.props.fetchList(nextProps.match.params.listId);
  //   }
  // }

  renderTasks(tasks) {
    return tasks.map((task, idx) => {
      return (
        <li key={`${idx}${task.id}${task.title}`} className="task">
          <TaskIndexItemContainer task={task} taskType={this.props.taskType} />
        </li>
      );
    });
  }

  render() {
    const tasks = Object.values(this.props.tasks);
    if (Object.keys(tasks).length === 0) return null;
    return (
      <div className="tasks">
        <ul>
          {this.renderTasks(tasks)}
        </ul>
      </div>
    );
  }
}
