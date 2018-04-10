import { connect } from 'react-redux';
import React from 'react';
import {
  addNewTask, fetchTasks, clearErrors
} from '../../actions/task_actions';
import ListIndexItem from './list_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.match.params.listId];
  return {
    errors: state.errors.lists,
    list: list,
    task: {
      title: '',
      description: '',
      due_date: '',
      list_id: ownProps.match.params.listId,
      user_id: state.session.currentUser.id
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formTask) => dispatch(addNewTask(formTask)),
    fetchTasks: () => dispatch(fetchTasks()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListIndexItem));
