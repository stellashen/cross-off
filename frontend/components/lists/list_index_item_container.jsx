import { connect } from 'react-redux';
import React from 'react';
import { clearErrors, editTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import ListIndexItem from './list_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const lists = state.entities.lists;
  const currentList = lists[ownProps.match.params.listId];
  // let [completed, incomplete] = selector(state)
  return {
    currentList,
    tasks: state.entities.tasks,
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    editTask: (task) => dispatch(editTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListIndexItem));
