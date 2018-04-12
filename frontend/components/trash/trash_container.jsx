import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks, clearErrors, deleteTask } from '../../actions/task_actions';
import Trash from './trash';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // let [completed, incomplete] = selector(state)
  return {
    errors: state.errors.tasks,
    tasks: state.entities.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (flag) => dispatch(fetchTasks(flag)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Trash));
