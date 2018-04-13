import { connect } from 'react-redux';
import React from 'react';
import { editTask } from '../../actions/task_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    tasks: state.entities.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
