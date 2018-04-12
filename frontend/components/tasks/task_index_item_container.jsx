import { connect } from 'react-redux';
import React from 'react';
import {
  editTask,
  deleteTask,
} from '../../actions/task_actions';
import TaskIndexItem from './task_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // let [completed, incomplete] = selector(state)
  return {
    task: ownProps.task,
    taskType: ownProps.taskType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskIndexItem));
