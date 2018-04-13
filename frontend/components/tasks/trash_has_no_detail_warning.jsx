import React from 'react';

export default class TaskHasNoDetailWarning extends React.Component {
  render() {
    return(
      <div className="task-no-detail-warning-container">
        <div className="task-no-detail-warning">
          <h3> Sorry, </h3>
          <br/>
          <h3> task detail page is not available for tasks in the trash </h3>
        </div>
      </div>
    );
  }
}
