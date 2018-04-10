import { connect } from 'react-redux';
import React from 'react';
import { addNewTask, clearErrors } from '../../actions/task_actions';
import NewTaskBar from './new_task_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.match.params.listId];
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.tasks,
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
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewTaskBar)
);
