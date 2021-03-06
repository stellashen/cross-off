import { connect } from 'react-redux';
import React from 'react';
import {
  clearErrors,
  editTask,
  clearTasks,
  closeTask
} from '../../actions/task_actions';
import { fetchList, closeList, requestSingleList } from '../../actions/list_actions';
import ListIndexItem from './list_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const lists = state.entities.lists;
  const currentList = lists[ownProps.match.params.listId];
  const listId = state.ui.listId;
  const tasks = state.entities.tasks;
  return {
    currentList,
    listId,
    tasks,
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    requestSingleList: (id) => dispatch(requestSingleList(id)),
    closeList: () => dispatch(closeList()),
    clearTasks: () => dispatch(clearTasks()),
    clearErrors: () => dispatch(clearErrors()),
    editTask: (task) => dispatch(editTask(task)),
    closeTask: () => dispatch(closeTask()),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListIndexItem));
