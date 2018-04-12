import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItemContainer from '../tasks/task_index_item_container';

export default class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTasks(tasks) {
    return tasks.map((task, idx) => {
      if (!task || task.completed === true) {
        return null;
      }
      return (
        <li key={`${task.id}${task.title}`} className="task">
          <TaskIndexItemContainer task={task} taskType={this.props.taskType} />
        </li>
      );
    });
  }

  render() {
    const tasks = Object.values(this.props.tasks);
    if (!tasks) return null;
    return (
      <div className="tasks">
        <ul>
          {this.renderTasks(tasks)}
        </ul>
      </div>
    );
  }
}
