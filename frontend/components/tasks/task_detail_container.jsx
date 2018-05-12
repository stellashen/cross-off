import { connect } from 'react-redux';
import React from 'react';
import { editTask, clearErrors } from '../../actions/task_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.entities.tasks,
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    editTask: (task) => dispatch(editTask(task)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
