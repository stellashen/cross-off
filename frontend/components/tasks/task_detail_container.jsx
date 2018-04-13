import { connect } from 'react-redux';
import React from 'react';
import { editTask, clearErrors } from '../../actions/task_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    tasks: state.entities.tasks,
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
