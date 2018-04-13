import React from 'react';

export default class TaskDetailReminder extends React.Component {
  render() {
    return(
      <div className="task-detail-reminder-container">
        <div className="task-detail-null-reminder">
          <h3>Click a task title to </h3>
          <ul>
            <li> - edit title</li>
            <li> - add due date</li>
            <li> - add description</li>
          </ul>
        </div>
      </div>
    );
  }
}
