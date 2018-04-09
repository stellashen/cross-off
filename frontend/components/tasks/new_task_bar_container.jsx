import { connect } from 'react-redux';
import React from 'react';
import { addNewTask, clearErrors } from '../../actions/task_actions';
import NewTaskBar from './new_task_bar';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formTask) => dispatch(addNewTask(formTask)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskBar);
