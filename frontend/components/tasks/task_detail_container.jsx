import { connect } from 'react-redux';
import React from 'react';
import {
  editTask,
  clearErrors,
  requestSingleTask,
} from '../../actions/task_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  const emptyTask = {
    title:'',
    description:'',
    due_date:'',
  };
  return {
    errors: state.errors.tasks,
    currentTask: state.entities.currentTask,
    emptyTask,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    clearErrors: () => dispatch(clearErrors()),
    requestSingleTask: (id) => dispatch(requestSingleTask(id))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
