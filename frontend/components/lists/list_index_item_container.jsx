import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks, clearErrors } from '../../actions/task_actions';
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
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    fetchTasks: () => dispatch(fetchTasks()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListIndexItem));
