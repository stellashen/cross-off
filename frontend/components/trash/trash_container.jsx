import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks,
  clearErrors,
  deleteTask } from '../../actions/task_actions';
import Trash from './trash';
import { withRouter } from 'react-router-dom';
import { trash, closeList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.tasks,
    tasks: state.entities.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (flag) => dispatch(fetchTasks(flag)),
    clearErrors: () => dispatch(clearErrors()),
    deleteTask: (id) => dispatch(deleteTask(id)),
    trash:() => dispatch(trash()),
    closeList: () => dispatch(closeList()),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Trash));
