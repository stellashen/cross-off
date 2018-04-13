import { connect } from 'react-redux';
import React from 'react';
import {
  editTask,
  deleteTask,
  moveToCompleted,
  moveToTodos,
} from '../../actions/task_actions';
import TaskIndexItem from './task_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const style = {textDecoration: 'line-through', color: 'gray'};
  const nullStyle = {textDecoration: 'none', color: 'black'};
  const task = ownProps.task;
  const divStyle = task.completed? style : nullStyle;
  return {
    task,
    divStyle,
    taskType: ownProps.taskType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    moveToCompleted: (task) => dispatch(moveToCompleted(task)),
    moveToTodos: (task) => dispatch(moveToTodos(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskIndexItem));
