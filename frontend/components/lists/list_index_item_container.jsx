import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks, clearErrors, deleteTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import ListIndexItem from './list_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const lists = state.entities.lists;
  const list = lists[ownProps.match.params.listId];
  return {
    lists: lists,
    errors: state.errors.tasks,
    list: list,
    tasks: state.entities.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    fetchTasks: () => dispatch(fetchTasks()),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListIndexItem));
