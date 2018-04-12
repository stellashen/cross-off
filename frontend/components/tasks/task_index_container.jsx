import { connect } from 'react-redux';
import React from 'react';
import TaskIndex from './task_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: ownProps.tasks,
    taskType: ownProps.taskType,
  };
};

export default withRouter(connect(
  mapStateToProps, null
)(TaskIndex));
