import { connect } from 'react-redux';
import React from 'react';
import {
  editTask,
  clearErrors,
  requestSingleTask,
} from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.entities.tasks;
  const id = ownProps.taskId;
  let task = {};
  debugger;
  if (tasks !== undefined && id !== undefined) {
    const todosCollection = tasks.todos;
    const completedCollection = tasks.completed;
    let tasksCollection = {};
    if (todosCollection && todosCollection[id]) {
      tasksCollection = todosCollection;
    } else if (completedCollection && completedCollection[id]) {
      tasksCollection = completedCollection;
    }
    if (tasksCollection !== {} && !tasksCollection) {
      task = tasksCollection[id];
    }
  }
  return {
    errors: state.errors.tasks,
    task,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    clearErrors: () => dispatch(clearErrors()),
    requestSingleTask: (id) => dispatch(requestSingleTask(id)),
    fetchList: (id) => dispatch(fetchList(id)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
